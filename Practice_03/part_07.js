function findUnique(myArray) 
    {
        for (var i = 0; i < myArray.length; i++) 
        {
            for (var j = 0; j < myArray.length; j++) 
            {
                if (i != j) 
                {
                    if (myArray[i] == myArray[j]) 
                    {
                        return true; // means there are duplicate values
                    }
                }
            }
        }
        return false; // means there are no duplicate values.
    }

findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true
