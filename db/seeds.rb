first_names = ["Brad", "Clara", "Danny", "David", "Daniel", "Gabriel", "Jesse", "Jacqueline", "Thomas", "Kathryn", "Maeve", "Mark", "Michael", "Mike", "Martha", "Noah", "Taylor", "Patrick", "Mandy", "Elliot", "Richie", "Kevin", "Kimbra", "Amanda", "Brianne"]

last_names = ["Harris", "Bova", "Pham", "Ruiz", "Nguyen", "Bonner", "Kinser", "Phan", "Farr", "Ragudos", "Solorio", "Tierney", "Laurel", "Rodgers", "Naamad", "Beck", "Allen", "McDorman", "Wolfe", "Yi", "Brookstein", "Wada", "Siemers"]

users = 50.times.map do
  User.create!( first_name: first_names[rand(0...first_names.length)],
                last_name: last_names[rand(0...last_names.length)],
                email: Faker::Internet.email,
                password: 'password' )
end
