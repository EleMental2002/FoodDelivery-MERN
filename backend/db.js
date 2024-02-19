const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://net-ninja:test123@node-tuts.knocr.mongodb.net/gofoodmern?retryWrites=true&w=majority'



const mongoDB = () => {
    mongoose.connect(mongoURI)
        .then(async () => {
            console.log('Successfully connected to MongoDB');

            try {
                const fetched_data = await mongoose.connection.db.collection("food_items");
                const data = await fetched_data.find({}).toArray();
                // global.food_items = data;
                // console.log(global.food_items);
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                const categoryData = await foodCategory.find({}).toArray();
                global.food_items = data;
                global.food_cate = categoryData;
            } catch (error) {
                console.log('Error fetching data:', error);
            }




        })
        .catch(error => {
            console.log('Error connecting to MongoDB:', error);
        });
};





module.exports = mongoDB;

