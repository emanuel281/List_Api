	// An object to hold the item we will be
	// storing in our list
	exports.ListItem = function(data, tail) {
		this.tail = tail
		this.data = data
	}
	// List implementation
	exports.List = function() {
		this.item = null

	// Add a data item to the front of the list
	this.add = function(elem) {
	//this.item = new ListItem(elem, this.item)
	this.item = new ListItem(elem, this.item)
	}

	// Returns true if the list is empty
	this.empty = function() {
		return this.item === null
	}

	// Returns the data at the head of the list. If
	// the list is empty, return null. This leaves
	// the list unmodified
	this.head = function() {
		// ......
		//return null
		if(this.empty())
			return null;
		else
			return this.item.data;
	}

	// Remove item off the head of the list and return
	// its value. The new head of the list must be the
	// next element in the list if it exists. If the
	// list is empty, we return null
	this.pop = function() {
		// ......
		//return null
		// ......\
		if(this.empty())
			return null
		else{
			var recent_head = this.item.data;
			this.item = this.item.tail;
			return recent_head;
		}
	}

	// Return the number of elements in the list.
	this.length = function() {
		// ......
		//return -1
		if(this.empty()){
			return 0
		}
		else{
			var len = 0;
			var temp = this.item;

			while(temp){
				len++;
				temp = temp.tail;
			}
			return len;
		}
	}

	// Return the last data item in the list if it exists. If
	// not, return null
	this.last = function() {
		// ......
		//return null
		if(this.empty()){
			return null
		}
		else{
			var temp = this.item;

			while(temp.tail){
				temp = temp.tail;
			}

			return temp.data;
		}
	}

	this.equals = function(anotherList){
		if(this.length() !== anotherList.length()){
			return false
		}
		else if(this.empty() === true && anotherList.empty() === true){
			return true
		}
		else{
			var temp1 = this.item
			var temp2 = anotherList.item
			var bool = true

			while(bool && temp1 !== null && temp2 !== null){

				if(temp1.data !== temp2.data){
					bool = false
				}

				temp1 = temp1.tail
				temp2 = temp2.tail

			}

			return bool

		}
	}

	this.reverse = function(){

		if(this.empty()){
			return null;
		}
		else if(this.length() === 1){
			return this.item;
		}
		else{

			var reversing = new List();
			console.log(typeof reversing)


			while(!this.empty()){

				reversing.add(this.pop());
			}

			this.item = reversing.item;
			return this.item
		}
	}

	this.merge = function(anotherList){
		var temp = anotherList.item;

		if(anotherList.empty()){
			return this.item
		}
		else if(this.empty()){
			this.item = anotherList.item;
			return this.item
		}
		else{
			while(temp !== null){
				var temp_this = this.item;
				var track = 0;

				while(temp_this !== null){
					if(temp_this.data === temp.data){
						track++;
					}
					temp_this = temp_this.tail;
				}

				if(track === 0){
					this.add(temp.data)
				}

				temp = temp.tail;
			}
		}
	}
}

