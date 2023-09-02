const News = require("../modules/News");
const ObjectId = require("mongoose").Types.ObjectId;

const addNews = async (req, res) => {
  const newNews = new News({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    category_id: req.body.category_id,
    subcategory_id: req.body.subcategory_id,
  });
  newNews
    .save()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getAllNews = async (req, res) => {
  const allNews = await News.find()
    .then((doc, err) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

const updateNews = async (req, res) => {
  const News = await News.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body })
    .then((doc, err) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

const categoryWiseNews = async (req, res) => {
  try {
    const cat = req.params.cat;
    console.log("file: news_controller.js:45  cat:", cat)
    let news = await News.aggregate([
      {
        $match: {
          category_id: new ObjectId(cat),
        },
      },
      {
        $group: {
          _id: "$subcategory_id",
          news: {
            $push: {
              name: "$name",
              image: "$image",
              description: "$description",
            },
          },
        },
      },
      {
        $lookup: {
          from: "subcategories",
          as: "subcategories",
          localField: "_id",
          foreignField: "_id",
        },
      },
      {
        $unwind: "$subcategories",
      },
      {
        $project: {
          subcategory: "$subcategories.name",
          news: 1,
          _id:0
        },
      },
    ]);
    res.json(news)
  } catch (error) {
    console.error(error);
    res.json(error.message);
  }
};

module.exports = { addNews, getAllNews, updateNews, categoryWiseNews };

// const loginNews = async (req, res) => {
//   console.log(req.body);
//   try {
//     const { email, password } = req.body;
//     News.findOne({ email: email }).then((News) => {
//       if (News) {
//         if (News.password === password) {
//           res.json({
//             News: News,
//             message: ""
//           });
//         } else {
//           res.json({message:"The password is incorrect"});
//         }
//       } else {
//         res.json({message:"No record found"});
//       }
//     });
//   } catch (err) {
//     res.send(err);
//   }
// };

// const loginNews = async (req, res) => {
//   const { email, password } = req.body;
//   const News = await News.findOne({ email, password });
//   if (News) {
//     res.status(200).json(News);
//   } else {
//     res.status(400).json(false);
//   }
// };
