var Router = require('koa-router');
const mongoose = require('mongoose');
var router = new Router();



var personSchema = mongoose.Schema({
  imgUrl: '',
  name: '',
  age: {
    type: Number
  },

  // 职业
  occupation: '',

  // 技能
  skills: {
    type: Array
  },

  // 被动
  passive: ''
});

var personModel = mongoose.model('person', personSchema);


// 列表页
router.get('/list', async function (ctx) {
  try {

    // 将查找的数据的 name 值按照 ASCII 表排序，1 表示升序，-1 表示降序
    var result = await personModel.find().sort({ name: 1 });

    // 查找的数据不排序
    // var result = await personModel.find()
    ctx.body = {
      code: 666,
      msg: 'scuess',
      data: result
    }

  } catch (error) {
    ctx.body = {
      code: 500,
      msg: 'error',
      error: error
    }
  }
})


// 添加人物页
router.post('/push', async function (ctx) {
  try {
    var data = ctx.params;

    ctx.body = {
      code: 666,
      msg: 'scuess',
    }

  } catch (error) {
    ctx.body = {
      code: 500,
      msg: 'error',
      error: error
    }
  }
  var model = new personModel(data);
  await model.save();
})



// 人物详情页
router.get('/detail', async function (ctx) {
  var _id = ctx.params._id;

  if (!_id) {
    ctx.body = {
      code: 601,
      msg: '缺少_id'
    }
    return false;
  }

  try {
    var result = await personModel.findOne({
      _id
    });

    if (!result) {
      ctx.body = {
        code: 602,
        msg: '没有这条数据'
      }
    } else {
      ctx.body = {
        code: 666,
        msg: 'sucess',
        data: result
      }
    }

  } catch (error) {
    ctx.body = {
      code: 500,
      msg: '添加失败',
      error: error
    };
  }
})


// 修改人物信息
router.post('/edit', async function (ctx) {
  var _id = ctx.params._id;
  var data = ctx.params;

  try {
    var result = await personModel.updateOne({
      _id
    }, data);

    ctx.body = {
      code: 666,
      msg: 'suceess',
      data: result
    }
  } catch (error) {
    ctx.body = {
      code: 500,
      msg: '添加失败',
      error: error
    };
  }
})


// 删除人物
router.get('/delete', async function (ctx) {
  var _id = ctx.params._id;
  try {
    var result = await personModel.deleteOne({
      _id
    });
    ctx.body = {
      code: 666,
      msg: 'sucess',
      data: result
    }
  } catch (error) {
    ctx.body = {
      code: 500,
      msg: '添加失败',
      error: error
    };
  }
});


// 导出路由对象
module.exports = router;