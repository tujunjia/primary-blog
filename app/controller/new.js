'use strict';

const Controller = require('egg').Controller;

class NewController extends Controller {
  async index() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/new/1' },
        { id: 2, title: 'this is news 2', url: '/new/2' },
        { id: 3, title: 'this is news 3', url: '/new/3' },
        { id: 4, title: 'this is news 4', url: '/new/4' },
        { id: 5, title: 'this is news 5', url: '/new/5' }
      ]
    };
    await this.ctx.render('new/index.njk', dataList);
  }
}
module.exports = NewController;
