import { userIdFromJwt, assignUserIdToItems } from './helperFunctions.mjs';

export const formatFridgeItem = (item) => {
  const {
    food_item: foodItem,
    category,
    storage,
    shelfLifeDays,
  } = item.shelf_life_item;

  return {
    id: item.id,
    name: foodItem.name,
    category: category.name,
    storageMethod: storage.name,
    shelfLifeDays,
    purchaseDate: item.addedOn,
    expiryDate: item.expiry,
    notes: item.notes,
  };
};

export function initFridgeItemsController(db) {
  const index = async (request, response) => {
    try {
      const { userToken } = request.params;
      const userCookie = request.cookies.token;
      const userId = await userIdFromJwt(userCookie ?? userToken, db);
      const fridgeItems = await db.FridgeItem.findAll({
        where: { userId },
        include: {
          model: db.ShelfLifeItem,
          attributes: [
            'id',
            'foodItemId',
            'categoryId',
            'storageId',
            'shelfLifeDays',
          ],
          include: [
            { model: db.FoodItem, attributes: ['id', 'name'] },
            { model: db.Category, attributes: ['id', 'name'] },
            { model: db.Storage, attributes: ['id', 'name'] },
          ],
        },
      });

      // TODO: add condition when fridgeItems = 0
      const dataToClient = fridgeItems?.map((item) => formatFridgeItem(item));
      response.send(dataToClient);
    } catch (err) {
      console.log(err.message);
      response.send('Something went wrong');
    }
  };

  const add = async (request, response) => {
    try {
      const { items, userToken } = request.body;
      const userCookie = request.cookies.token;
      const userId = await userIdFromJwt(userCookie ?? userToken, db);
      const updatedItems = assignUserIdToItems(items, userId);
      const addedItems = await db.FridgeItem.bulkCreate(updatedItems, {
        fields: [
          'userId',
          'shelfLifeItemId',
          'addedOn',
          'expiry',
          'notes',
          'notificationIdentifier',
        ],
      });

      const addedItemsIds = addedItems.map((item) => item.id);
      const addedItemsDetails = await db.FridgeItem.findAll({
        where: { id: addedItemsIds },
        include: {
          model: db.ShelfLifeItem,
          attributes: [
            'id',
            'foodItemId',
            'categoryId',
            'storageId',
            'shelfLifeDays',
          ],
          include: [
            { model: db.FoodItem, attributes: ['id', 'name'] },
            { model: db.Category, attributes: ['id', 'name'] },
            { model: db.Storage, attributes: ['id', 'name'] },
          ],
        },
      });

      const dataToClient = addedItemsDetails.map((item) =>
        formatFridgeItem(item)
      );

      console.log(dataToClient);
      response.send(dataToClient);
    } catch (err) {
      console.log(err.message);
      response.send('Something went wrong');
    }
  };

  const destroy = async (request, response) => {
    try {
      const { itemId, userToken } = request.body;
      const userCookie = request.cookies.token;
      const userId = await userIdFromJwt(userCookie ?? userToken, db);
      const item = await db.FridgeItem.findOne({
        where: { id: itemId, userId },
      });

      const dataToClient = item.notificationIdentifier;
      await item.destroy();
      response.send(dataToClient);
    } catch (err) {
      console.log(err.message);
      response.send('Something went wrong');
    }
  };

  const editExpiry = async (request, response) => {
    try {
      const { itemId, userToken, dateChanged } = request.body;
      const userCookie = request.cookies.token;

      console.log(itemId, userToken, dateChanged);
      const userId = await userIdFromJwt(userCookie ?? userToken, db);
      console.log(userId);
      const updatedItem = await db.FridgeItem.update(
        {
          expiry: dateChanged,
        },
        {
          where: { id: itemId, userId },
        }
      );

      console.log(updatedItem, 'item');

      response.send({ itemId });
    } catch (err) {
      console.log(err.message);
      response.send('Something went wrong');
    }
  };

  const addNotification = async (request, response) => {
    try {
      const { id } = request.params;
      const { notificationIdentifier, userToken } = request.body;
      const userId = await userIdFromJwt(userToken, db);
      await db.FridgeItem.update(
        { notificationIdentifier },
        { where: { id, userId } }
      );

      response.status(200);
    } catch (err) {
      console.log(err.message);
      response.send('Something went wrong');
    }
  };

  return {
    index,
    add,
    destroy,
    addNotification,
    editExpiry,
  };
}
