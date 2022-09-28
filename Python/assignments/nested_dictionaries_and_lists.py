# 1) Update Values in Dictionaries and Lists

# Change the value 10 in x to 15. Once you're done, x 
# should now be [ [5,2,3], [15,8,9] ].


x = [ [5,2,3], [10,8,9] ] 
x.pop()
x.append([15,8,9])
print(x)

# Change the last_name of the first student from 'Jordan' to 'Bryant'
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
students[0] = {'first_name':  'Michael', 'last_name' : 'Bryant'}
print(students)

# In the sports_directory, change 'Messi' to 'Andres'
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
sports_directory['soccer'] = ['Andres', 'Ronaldo', 'Rooney']
print(sports_directory)

# Change the value 20 in z to 30
z = [ {'x': 10, 'y': 20} ] 
z.pop()
z.append({'x': 10, 'y': 30})
print(z)


# 2) Iterate Through a List of Dictionaries

# Create a function iterateDictionary(some_list) that, 
# given a list of dictionaries, the function loops through each 
# dictionary in the list and prints each key and the associated value. 

students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterateDictionary(some_list): 
    for dict in some_list: 
        print(dict)
iterateDictionary(students) 


# 3) Get Values From a List of Dictionaries

def iterateDictionary2(key_name, some_list): 
    for dict in some_list:
        print(dict[key_name])
iterateDictionary2('first_name', students) #can put last name here as well


# 4) Iterate Through a Dictionary with List Values 

# given a dictionary whose values are all lists, prints the name of 
# each key along with the size of its list, and then 
# prints the associated values within each key's list

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printInfo(some_dict): 
    for key in some_dict:
        len(some_dict[key])
        print(f"{len(some_dict[key])} {key}")
        for value in some_dict[key]: 
            print(value)
printInfo(dojo) 


