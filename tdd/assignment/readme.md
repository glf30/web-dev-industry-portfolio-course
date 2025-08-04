# TDD - Assignment

In today's assignment, we will be using TDD in a real-world scenario, to calculate the total for a shopping cart. Let's dive into what the requirements for our JavaScript function are.

### Requirements

1. The function should take in an array of cart items, where each item is an object with a name, price, weight, and quantity.
2. The function should return the total price of all items in the cart added together.
3. The function will also take in a string representing the state the user is in, using it to adjust the price accordingly.
4. The function will add a shipping cost that's based on the total weight of the cart.
5. The function will remove the shipping cost if the total price without shipping or tax reaches a certain threshold.

### Detailed Requirements

1. The function should return 0 if given an empty array.

**Example:**

[] -> 0

2. The function should return the total price for a single item in the cart.

**Examples:**

[{ name: 'apple', price: 1, weight: 0, quantity: 1 }] -> 1
[{ name: 'banana', price: 2, weight: 0, quantity: 1 }] -> 2

3. The function should return the total price for multiple items in the cart.

**Examples:**

[{ name: 'apple', price: 1, weight: 0, quantity: 1 }, { name: 'banana', price: 2, weight: 0, quantity: 1 }] -> 3
[{ name: 'mango', price: 3, weight: 0, quantity: 1 }, { name: 'orange', price: 4, weight: 0, quantity: 1 }] -> 7

4. The function should return the total price for multiple items with quantity taken into account.

**Examples:**

[{ name: 'apple', price: 1, weight: 0, quantity: 2 }, { name: 'banana', price: 2, weight: 0, quantity: 1 }] -> 4
[{ name: 'mango', price: 3, weight: 0, quantity: 3 }, { name: 'orange', price: 4, weight: 0, quantity: 2 }] -> 17

5. The function should return the total price for multiple items with shipping taken into account. Shipping will be $2 per pound of weight.

**Examples:**

[{ name: 'apple', price: 1, weight: 2, quantity: 2 }, { name: 'banana', price: 2, weight: 1, quantity: 1 }] -> 10 ($4 pre-shipping + $6 shipping)
[{ name: 'mango', price: 3, weight: 3, quantity: 3 }, { name: 'orange', price: 4, weight: 2, quantity: 2 }] -> 27 ($17 pre-shipping + $10 shipping)

6. The function should return the total price for multiple items with shipping taken into account. Shipping will be $2 per pound of weight. If the total price without shipping or tax reaches $100, the shipping cost will be removed.

**Examples:**

[{ name: 'watermelon', price: 15, weight: 10, quantity: 20 }, { name: 'cantaloupe', price: 10, weight: 5, quantity: 1 }] -> $310 ($310 pre-shipping, no shipping cost added)
[{ name: 'watermelon', price: 15, weight: 10, quantity: 6 }, { name: 'cantaloupe', price: 10, weight: 5, quantity: 1 }] -> $100 (100 pre-shipping, no shipping added)

7. The function should take tax into account if passed a second argument. 3 states should be handled: NY has an 8% tax, MA has a 10% tax, NJ has a 5% tax. These taxes should apply only to the pre-shipping total.

**Examples:**

[{ name: 'pumpkin', price: 10, weight: 20, quantity: 4 }, { name: 'mango', price: 5, weight: 12, quantity: 32 }], 'MA' -> $220 ($200 pre-shipping, plus a 10% tax makes $220, no shipping added)
[{ name: 'pumpkin', price: 10, weight: 5, quantity: 1 }, { name: 'mango', price: 5, weight: 3, quantity: 8 }], 'NJ' -> $68.50 ($50 pre-shipping, plus a 5% tax makes $52.50, plus $16 shipping)

### Setup

1. Run `npm init -y` to create a `package.json` file in this directory.
2. Install Jest by running `npm install jest`.
3. Create an `index.js` file and, in that file, a function to work in and a `module.exports` line to export that function.
4. Import the function in an `index.test.js` file with `require`.
5. Either directly run Jest using `jest` (for a one-time run) or `jest --watch-all` (for run-on-save), or add script(s) to your `package.json` file to run Jest.

If you haven't created a test yet, you will get an error. **This error is normal and expected**. It's simply Jest telling you that you don't have any tests yet.


### Walking Through The First Test

1. Write a failing test for the first requirement. Once you've done so, run Jest to see the test fail.

```javascript
it('should return 0 if there are no items in the cart', () => {
  expect(getCartTotal([])).toBe(0);
})
```

Make sure to **export your function in `index.js`**, then ensure **you're importing your function in `index.test.js`**, and, finally, make sure **the function names match**.

2. Write a function (or edit the function if you've written it) so that it takes in the input and returns the valid output.

``` javascript
function getCartTotal(cart) {
  if (cart.length === 0) {
    return 0;
  }
}
```

Note that **you will likely have a better way to handle this case later**. Your code will eventually evolve to not needing that `if`. Just **make sure you continue to pass this test!**

### General Workflow

1. Write a failing test for the current requirement.
2. Write the minimum amount of code to pass the test.
3. Refactor the code if it can be improved upon, ensuring you're still passing the test.
4. Repeat the process for the next requirement, *ensuring you're still passing previous tests**.
