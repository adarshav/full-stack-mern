const express = require('express');
const router = express.Router();
const _ = require('lodash');

const {ObjectId} = require('mongodb');
const mongoose = require('../config/db');
const Employee = require('../models/employee');

// this means /employees/
router.get('/', (req ,res) => {
    Employee.find().then((emp) => {
        res.send(emp);
    }).catch((err) => {
        res.send(err);
    });
});

//this means /employees/:id
router.get('/:id', (req ,res) => {
    let id = req.params.id;
    Employee.findById(id).then((emp) => {
        res.send(emp);
    })
});

//list all education details
router.get('/:id/education_details', (req ,res) => {
    let id = req.params.id;
    Employee.findById(id).then((emp) => {
        res.send(emp.education.id);
    })
})

router.get('/:id/education_details/:education_id', (req, res) => {
    let id = req.params.id;
    let educationId = req.params.education_id;
    Employee.findById(id).then((emp) =>{
        res.send(emp.education.id);
    })
})

//
router.post('/:id/education_details', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['eduType', 'yearOfPassing']);
    Employee.findById(id) 
    .then((emp) => {
        employee.education.push(body);
        return employee.save();
    }).then((emp) => {
        res.send(emp);
    }).catch((err) => {
        res.send(err);
    });
});

//remove a education record
//employees/id/education_details/:education_id
router.delete('/:id/education_details/:education_id', (req ,res) => {
    let id = req.params.id;
    let educationId = req.params.education_id;
    Employee.findById(id).then((emp) => {
        emp.education.remove(educationId);
            return emp.save();
    }).then((emp) => {
        res.send(emp);
    }).catch((err) => {
        res.send(err);
    });
});

//update education record
router.put('/:id/education_details/:education_id', (req ,res) => {
    let id = req.params.id;
    let educationId = req.params.education_id;
    let body = _.pick(req.body, ['eduType', 'yearOfPassing'])
    Employee.findById(id).then((emp) => {
        let education = emp.education.id(educationId);
        Object.assign(education, body);//it takes 2 parameters 
        return emp.save();
    }).then((emp) => {
        res.send(emp);
    }).catch((err) => {
        res.send(err);
    })
})
//creating project field
router.post('/:id/projects', (req ,res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['title', 'details']);
    Employee.findById(id)
    .then((emp) => {
      emp.projects.push(body);
      return emp.save();  
    }).then((emp) => {
        res.send(emp);
    }).catch((err) => {
        res.send(err);
    })
})

//
router.delete('/:id/projects/:project_id', (req ,res) => {
    let id = req.params.id;
    let projectId = req.params.project_id;
    Employee.findById(id)
    .then((emp) => {
        emp.projects.remove(projectId);
        return emp.save();
    }).then((emp) => {
        res.send(emp);
    }).catch((err) => {
        res.send(err);
    });
});
//creating address record
router.post('/:id/address', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['street', 'state']);
    Employee.findById(id)
    .then((emp) => {
        emp.address.push(body);
        return emp.save();
    }).then((emp) => {
        res.send(emp);
    }).catch((err) => {
        res.send(err);
    });
});

//updating the address record for the particular employee
router.put('/:id/address/:address_id', (req ,res) => {
    let id = req.params.id;
    let addressId = req.params.address_id;
    let body = _.pick(req.body, ['street', 'state']);
    Employee.findById(id)
    .then((emp) => {
        let employee = emp.address.id(addressId);
        Object.assign(employee, body);
        return emp.save();//it is a bad practice to place 2 promises under one shelter, hence emp.save is returned and (.then)promise is nested
    }).then((emp) => {
        res.send(emp);
    }).catch((err) => {
        res.send(err);
    });
});

//deleting a particular address record for particular employee
router.delete('/:id/address/address_id', (req, res) => {
    let id = req.params.id;
    let addressId = req.params.address_id;
    Employee.findById(id)
    .then((emp) => {
        emp.address.remove(addressId);
        return emp.save();
    }).then((emp) => {
        res.send(emp);
    }).catch((err) => {
        res.send(err);
    });
});

router.post('/',(req, res) => {
    let body = _.pick(req.body, ['name', 'department', 'salary', 'email', 'ageWhileJoining', 'skills', 'luckyNumbers', 'education']);
    let employee = new Employee(body);
    employee.save().then((emp) => {
        res.send(emp);
    }).catch((err) => {
        res.send(err);
    });
})

//
router.put('/:id', (req ,res) => {
    let body = req.body;
    let id = req.params.id;
    Employee.findByIdAndUpdate(id, {$set:body}, {new:true})
    .then((emp) => {
        res.send({
            emp,
            notice:"succcessfully updated"
        })
    })
    .catch((err) => {
        res.send(err);
    })
})

router.delete('/:id', (req ,res) => {
    let id = req.params.id;
    Employee.findByIdAndRemove(id).then((emp) => {
        res.send({
            emp,
            notice:"successfully deleted"
        });
    })
})

router.post('/', (req, res) => {
    let body = req.body;
    let employee = new Employee(body);
    employee.save().then((emp) => {
        res.send(emp);
    })
    .catch((err) => {
        res.send(err);
    })
});

module.exports = router;