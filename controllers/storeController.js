const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req,res) => {
	res.render('index');
}

exports.addStore = (req, res) => {
  res.render('editStore', {title: 'Add Store'});
};

exports.createStore = async (req, res) => {
  const store = await (new Store(req.body)).save();
  req.flash('success', `Successfully created ${store.name}. Mind leaving a review?`);
  res.redirect(`/store/${store.slug}`); 
  console.log("Works!")
};

exports.getStores = async (req,res) => {
  // 1. Query database for stores
  const stores = await Store.find();
  res.render('stores', {title: 'Stores', stores});
};

exports.editStore = async(req,res) => {
  // 1. Find store by ID
    const store = await Store.findOne({_id:req.params.id });
  // 2. Confirm user is owner of store in question. TODO
  // 3. Render the edit store form.
    res.render('editStore', { title: `Edit ${store.name }`, store });
  // 4. 
};

exports.updateStore = async(req,res) => {
  //Find and update store
  const store = await Store.findOneAndUpdate({ _id:req.params.id}, req.body, {
    new: true, //Will return the new store rather than the old version of the store
    runValidators: true, //Forces model to make sure the store still has a name, fits within the character limit, etc.
  }).exec();
  req.flash('success', `Successfully updated <strong>${store.name}</strong>. <a href="/stores/${store.slug}">View Store</a>`);
  res.redirect(`/stores/${store._id}/edit`);
  //Redirect them to store page and confirm it all worked
}



