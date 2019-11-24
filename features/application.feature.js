// I want the test to the fizzbuzz application to see if it 
//returns the correct values for user values 15, 5, 3. 
require('../spec.helper')

describe('User can input a value and get FizzBuzz results', () => {
    before(async () => {
        await browser.init()
        await browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await browser.page.reload();
    })

    after(async () => {
        await browser.close();
    })

    it('clicking on the "Check" button', async () => {
        await browser.fillIn("input[id='value']", { with: "3" })
        await browser.clickOnButton("input[value='Fizz it!']")
        let content = await browser.getContent("[id='display_answer']")
        expect(content).to.eql('\n                You got:\n                Fizz!');
    })
})

