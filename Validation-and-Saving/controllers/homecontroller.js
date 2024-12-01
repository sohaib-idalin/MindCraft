import BaseController from "./basecontroller.js";

class CoursController extends BaseController {
    constructor() {
        super("model1");
        this.val = 0;
    }

    
    getNewValue = async (req, res) => {
        // send random number
        res.send({ value: Math.random()*100 });
    }

    getNextValue = async (req, res) => {
        // send value in sequence
        res.send({ value: this.val++ });
    }

    


}

export default CoursController;