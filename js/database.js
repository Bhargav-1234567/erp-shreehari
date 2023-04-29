// Initialize the database
var Datastore = require('nedb');
let db = new Datastore({ filename: 'db/persons.db', autoload: true });
let partsDb = new Datastore({ filename: 'db/parts.db', autoload: true });
let materialsDb = new Datastore({ filename: 'db/materials.db', autoload: true })


// Adds a person
exports.addPerson = function (firstname, lastname) {

  // Create the person object
  var person = {
    "firstname": firstname,
    "lastname": lastname
  };

  // Save the person to the database
  db.insert(person, function (err, newDoc) {
    // Do nothing
  });
};

// Returns all persons
exports.getPersons = function (fnc) {

  // Get all persons from the database
  db.find({}, function (err, docs) {

    // Execute the parameter function
    fnc(docs);
  });
}

// Deletes a person
exports.deletePerson = function (id) {

  db.remove({ _id: id }, {}, function (err, numRemoved) {
    // Do nothing
  });
}




exports.addPart = function (partNo, partName, dieSize, cutWeight, forgingWeight, material, forgingDate) {
  var part = {
    "partNo": partNo,
    "partName": partName,
    "forgingDate": forgingDate,
    "material": material,
    "forgingWeight": forgingWeight,
    "cutWeight": cutWeight,
    "dieSize": dieSize,
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

///material///////////////////////////////////////////////////
