require('analog')

/* eslint-disable */
module.exports = function () {
    analog = {}
    analog.data = [
        {
            url: 'http://localhost:1234/test/queryPage',
            data: [
                { testId: 1, testName: '测试1' },
                { testId: 2, testName: '测试2' }
            ]
        }
    ]
}()
