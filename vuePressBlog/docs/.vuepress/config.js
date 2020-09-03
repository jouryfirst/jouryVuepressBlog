module.exports = {
  base: '/joury/',
  title: '觉剑的博客',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'Web前端', link: '/frontEnd/' },
      { text: 'Python', link: '/python/' },
      { text: '技术文章收集', link: '/notes/' },
      { text: '文学', link: '/literature/' },
      // 下拉列表的配置
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'English', link: '/language/English' }
        ]
      }
    ]
  }
}
