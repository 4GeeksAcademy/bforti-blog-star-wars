const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos:[],
			characters:[],
			planets:[],
			vehicles:[],
			urlBase:"https://www.swapi.tech/api/"
		},
		actions: {
			getCharacters: async ()=>{
				try {
					let response= await fetch(`${getStore().urlBase}people`)
					let data=await response.json()

					

					if(response.ok){
						console.log(data)
						for(let i of data.results){
							try {
							let responsePeople = await fetch(`${getStore().urlBase}people/${i.uid}`)
							let dataPeople=await responsePeople.json()

							setStore({characters:[...getStore().characters, dataPeople.result]})
								
							} catch (error) {
								console.log(error)
							}
						}
					}

					
				} catch (error) {
					console.log(error)
					
				}

			},
			getPlanets: async()=>{
				try {
					let response=await fetch(`${getStore().urlBase}planets`)
					let data=await response.json()

					if(response.ok){
						console.log(data)
					}
					
				} catch (error) {
					console.log(error)
					
				}
			},
			getVehicles:async ()=>{
				try {
					let response=await fetch(`${getStore().urlBase}vehicles`)
					let data=await response.json()
					if(response.ok){
						console.log(data)
					}
					
				} catch (error) {
					console.log(error)
					
				}
			}
		
		}
	};
};

export default getState;
