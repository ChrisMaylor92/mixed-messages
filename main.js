function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const meals = {
    breakfast: ['fruit', 'cereal', 'a bacon butty', 'a breakfast bar', 'pancakes', "a full english"],
    lunch: ['a tuna panini', 'a chicken wrap', 'a halloumi wrap', 'a ham sandwich', 'soup', 'beans on toast'],
    dinner: ['lasagne', 'pizza', 'thai curry', 'peri peri chicken', 'steak and chips', 'pasta', 'fajitas']
  }

  let mealPlan = ["Here is today's meal plan;\n"]
  

  for(let prop in meals) {
    let mealIndex = generateRandomNumber(meals[prop].length)
   
    switch(prop) {
      case 'breakfast':
        mealPlan.push(`For Breakfast, you could have ${meals[prop][mealIndex]}.`)
        break
      case 'lunch':
        mealPlan.push(`For Lunch, you could have ${meals[prop][mealIndex]}.`)
        break
      case 'dinner':
        mealPlan.push(`For Dinner, you could have ${meals[prop][mealIndex]}.`)
        break
      default:
        mealPlan.push('There is not enough info.')
    }
  }
  
  function formatMealPlan(plan) {
    plan.push("\nEnjoy!")
    const formatted = plan.join('\n')
    console.log(formatted)
  }
    
  formatMealPlan(mealPlan);