import Vue from 'vue'
import Top from 'src/components/Top'

describe('Top.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div')
    })
    const defaultData = Top.data()
    expect(defaultData.buttons.length).to.equal(2)
  })
})
