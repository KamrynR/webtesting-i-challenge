module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const successfulItem = { ...item }

  if (successfulItem.enhancement === 20) {
    return successfulItem
  } else {
    successfulItem.enhancement += 1
    return successfulItem
  }
}

function fail(item) {
  const failedItem = { ...item }

  if (failedItem.enhancement < 15) {
    failedItem.durability -= 5
  }

  if (failedItem.enhancement >= 15) {
    failedItem.durability -= 10
  }

  if (failedItem.enhancement > 16) {
    failedItem.enhancement -= 1
  }

  return failedItem
}

function repair(item) {
  const repairedItem = { ...item }

  if (repairedItem.durability < 100) {
    repairedItem.durability = 100
  }

  return repairedItem
}

function get(item) {
  return { ...item };
}
