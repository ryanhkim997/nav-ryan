'use strict';
module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        { 
          id: 1000,
          name: 'Test Restaurant',
          address: { 
            line1: '123 Test St',
            line2: 'Testing, CA 90000',
            milesAway: 1.0 
          },
          phone: '(123) 456-7890',
          ratings: { 
            number: 100, 
            stars: 4.5, 
            good: 90, 
            timely: 90, 
            correct: 90,
            sampleReview: {
              name: "John Doe",
              review: "I am a test review."
            }  
          },
          schedule: {
            monFri: { delivery: 'test', pickup: 'test' },
            satSun: { delivery: 'test', pickup: 'test' }
          },
          image: 'https://images.unsplash.com/photo-1536875489903-655d152ed785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
          priceRange: 3,
          categories: [ 'Test' ] 
        }
      ]
    });
  }
};