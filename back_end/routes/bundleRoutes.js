const express = require('express');
const router = express.Router();
const Bundle = require('../models/bundleSchema');
const bundleController = require('../Controllers/bundleController');

// Create a new Bundle
// router.post('/',bundleController.createBundle);

router.get('/bundleName',bundleController.getBundles);

router.get('/search', async (req, res) => {
  const searchQuery = req.query.name;

  if (!searchQuery) {
    return res.status(400).json({ message: 'Search query is required' });
  }

  try {
    const bundles = await Bundle.find({
      BundleName: { $regex: searchQuery, $options: 'i' } 
    }).select('BundleId BundleName');

    if (bundles.length === 0) {
      return res.status(404).json({ message: 'No matching bundles found' });
    }

    res.status(200).json(bundles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
