// Initialize the database
var Datastore = require('nedb');
const fs = require('fs');
let db = new Datastore({ filename: 'db/persons.db', autoload: true });
let partsDb = new Datastore({ filename: 'db/parts.db', autoload: true });
let materialsDb = new Datastore({ filename: 'db/materials.db', autoload: true });
let dieSizeDb = new Datastore({ filename: 'db/dieSize.db', autoload: true });
let partyDb = new Datastore({ filename: 'db/partyList.db', autoload: true });



///parts////////////////////////////////
exports.addPart = function (partNo, partName, dieSize, cutWeight, forgingWeight, forgingDate, partQuantity, partyName) {
  var part = {
    "partNo": partNo,
    "partName": partName,
    "forgingDate": forgingDate,
    "forgingWeight": forgingWeight,
    "cutWeight": cutWeight,
    "dieSize": dieSize,
    "partQuantity": partQuantity,
    "partyName": partyName
  };

  partsDb.insert(part, function (err, newDoc) {
  });
};

exports.getParts = function (fnc) {

  // Get all persons from the database
  partsDb.find({}, function (err, docs) {

    // Execute the parameter function
    fnc(docs);
  });
}

exports.deletePart = function (id) {
  console.log({ id });

  partsDb.remove({ _id: id }, {}, function (err, numRemoved) {
    // Do nothing
    if (err) {
      console.log({ err });
    }
  });
}


exports.getPartById = function (id) {
  return new Promise((resolve, reject) => {
    partsDb.findOne({ _id: id }, function (err, doc) {
      if (err) {
        reject(err);
      } else {
        resolve(doc);
      }
    });
  });
}

exports.updatePart = function (id, data) {
  console.log(id, data)
  partsDb.update({ _id: id }, { $set: data }, function (err, newDoc) {
    if (err) {
      console.log(err);
    } else {
      console.log(`Successfully updated  record(s)`);
    }
  });
};


///material///////////////////////////////////////////////////

exports.addMaterial = function (materialNo, materialName, materialQantity, materialPrice) {
  var part = {
    "materialNo": materialNo,
    "materialName": materialName,
    "materialQantity": materialQantity,
    "materialPrice": materialPrice,

  };

  materialsDb.insert(part, function (err, newDoc) {
  });
};


exports.getMaterials = function (fnc) {

  // Get all persons from the database
  materialsDb.find({}, function (err, docs) {

    // Execute the parameter function
    fnc(docs);
  });
}

exports.deletMaterial = function (id) {

  materialsDb.remove({ _id: id }, {}, function (err, numRemoved) {
    // Do nothing
  });
}


exports.getMaterialById = function (id) {
  return new Promise((resolve, reject) => {
    materialsDb.findOne({ _id: id }, function (err, doc) {
      if (err) {
        reject(err);
      } else {
        resolve(doc);
      }
    });
  });
}

exports.updateMaterial = function (id, data) {
  console.log(id, data)
  materialsDb.update({ _id: id }, { $set: data }, function (err, newDoc) {
    if (err) {
      console.log(err);
    } else {
      console.log(`Successfully updated  record(s)`);
    }
  });
};

///diesize///////////////////////////////////////////////////
exports.addDieSize = function (dieSizeNo, dieSize, dieQuantity, dieMaterial, partName, partQuantity) {
  var part = {
    "dieSizeNo": dieSizeNo,
    "dieSize": dieSize,
    "dieQuantity": dieQuantity,
    "partName": partName,
    "dieMaterial": dieMaterial,
    "partQuantity": partQuantity
  };

  dieSizeDb.insert(part, function (err, newDoc) {
  });
};


exports.getDieSize = function (fnc) {

  // Get all persons from the database
  dieSizeDb.find({}, function (err, docs) {

    // Execute the parameter function
    fnc(docs);
  });
}

exports.deleteDieSize = function (id) {

  dieSizeDb.remove({ _id: id }, {}, function (err, numRemoved) {
    // Do nothing
  });
}


exports.getDieSizeById = function (id) {
  return new Promise((resolve, reject) => {
    dieSizeDb.findOne({ _id: id }, function (err, doc) {
      if (err) {
        reject(err);
      } else {
        resolve(doc);
      }
    });
  });
}

exports.updateDieSize = function (id, data) {
  console.log(id, data)
  dieSizeDb.update({ _id: id }, { $set: data }, function (err, newDoc) {
    if (err) {
      console.log(err);
    } else {
      console.log(`Successfully updated  record(s)`);
    }
  });
};


///////party////////

exports.addParty = function (partyName, contactNo, email, address) {
  var party = {
    "partyName": partyName,
    "contactNo": contactNo,
    "email": email,
    "address": address
  };
  partyDb.insert(party, function (err, newDoc) {
  });
};

exports.getParties = function (fnc) {
  partyDb.find({}, function (err, docs) {
    fnc(docs);
  });
}

exports.deleteParty = function (id) {
  partyDb.remove({ _id: id }, {}, function (err, numRemoved) {
    if (err) {
      console.log({ err });
    }
  });
}


exports.getPartyById = function (id) {
  return new Promise((resolve, reject) => {
    partyDb.findOne({ _id: id }, function (err, doc) {
      if (err) {
        reject(err);
      } else {
        resolve(doc);
      }
    });
  });
}

exports.updateParty = function (id, data) {
  console.log(id, data)
  partyDb.update({ _id: id }, { $set: data }, function (err, newDoc) {
    if (err) {
      console.log(err);
    } else {
      console.log(`Successfully updated  record(s)`);
    }
  });
};