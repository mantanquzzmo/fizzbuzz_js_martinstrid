// I want the test to the fizzbuzz application to see if it returns the correct values for user values 15, 5, 3. 

describe('User can input a value and get FizzBuzz results', () => {
    before(async () => {
        await BhxBrowser.init()
        await BhxBrowser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await browser.page.reload();
    })

    after(async () => {
        await browser.close();
    })
})

