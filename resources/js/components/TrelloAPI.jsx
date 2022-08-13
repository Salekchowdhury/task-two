import React from 'react';
import ReactDOM from 'react-dom';

function Example() {

    useEffect(() => {
        getMemberOrganizations();
        getBoardsOrganization();
        createBoard();
        updateBoard();
        getCardsList();
        deleteBoard();
        getBoardList();
        createList();
        viewCard();
        createCard();
    }, [])

    const getMemberOrganizations= () => {
        const url = "https://api.trello.com/1/members/me/organizations?key=90fc659f1f41eda945c3716c07cd5ad4&token=5cdf908ba0693c7a963ab4b489a5c89343520e819360be3281722e9ac5a240d7"
        fetch(url).then(response=>{
            return response.json();
        }).then(data=>{
                console.log("res:",data)
            }).catch(error=>{ 
                return error.response;
            });
    }

    const getBoardsOrganization= () => {
        const url = "https://api.trello.com/1/organizations/62f624139cf83e00197b102b/boards?key=90fc659f1f41eda945c3716c07cd5ad4&token=5cdf908ba0693c7a963ab4b489a5c89343520e819360be3281722e9ac5a240d7"
        fetch(url).then(response=>{
            return response.json();
        }).then(data=>{
                console.log("res:",data)
            }).catch(error=>{ 
                return error.response;
            });
    }

    
    const createBoard = async() => {
        const url = "https://api.trello.com/1/boards/?name=new-board&key=90fc659f1f41eda945c3716c07cd5ad4&token=5cdf908ba0693c7a963ab4b489a5c89343520e819360be3281722e9ac5a240d7"
        fetch(url, {method: 'POST'}).then(response=>{
            return response.json();
        }).then(data=>{
                console.log("res:",data)
            }).catch(error=>{ 
                return error.response;
            });
    }

    const updateBoard = async() => {
        const url = "https://api.trello.com/1/boards/62f624139cf83e00197b102b?key=90fc659f1f41eda945c3716c07cd5ad4&token=5cdf908ba0693c7a963ab4b489a5c89343520e819360be3281722e9ac5a240d7"
        fetch(url, {
        method: 'PUT'
        }).then(response=>{
            return response.json();
        }).then(data=>{
            console.log("res:",data)
        }).catch(error=>{ 
            return error.response;
        });
    }

    const deleteBoard = async() => {
        const url = "https://api.trello.com/1/boards/62f624139cf83e00197b102b?key=90fc659f1f41eda945c3716c07cd5ad4&token=5cdf908ba0693c7a963ab4b489a5c89343520e819360be3281722e9ac5a240d7"
        fetch(url, {
        method: 'DELETE'
        }).then(response=>{
            return response.json();
        }).then(data=>{
            console.log("res:",data)
        }).catch(error=>{ 
            return error.response;
        });
    }
    
    const getBoardList = async() => {
        const url = "https://api.trello.com/1/boards/62f624139cf83e00197b102b/lists??key=90fc659f1f41eda945c3716c07cd5ad4&token=5cdf908ba0693c7a963ab4b489a5c89343520e819360be3281722e9ac5a240d7"
        fetch(url).then(response=>{
            return response.json();
        }).then(data=>{
            console.log("res:",data)
        }).catch(error=>{ 
            return error.response;
        });
    }

        
    const getCardsList = async() => {
        const url = "https://api.trello.com/1/lists/62f624139cf83e00197b102b/cards?key=90fc659f1f41eda945c3716c07cd5ad4&token=5cdf908ba0693c7a963ab4b489a5c89343520e819360be3281722e9ac5a240d7"
        fetch(url).then(response=>{
            return response.json();
        }).then(data=>{
            console.log("res:",data)
        }).catch(error=>{ 
            return error.response;
        });
    }
    
    const createList = async() => {
        const url = "https://api.trello.com/1/lists?name=new-list&idBoard=5abbe4b7ddc1b351ef961414&key=90fc659f1f41eda945c3716c07cd5ad4&token=5cdf908ba0693c7a963ab4b489a5c89343520e819360be3281722e9ac5a240d7"
        fetch(url, {
        method: 'POST'
        }).then(data=>{
            console.log("res:",data)
        }).catch(error=>{ 
            return error.response;
        });
    }

        
    const viewCard = async() => {
        const url = "https://api.trello.com/1/cards/62f624139cf83e00197b102b?key=90fc659f1f41eda945c3716c07cd5ad4&token=5cdf908ba0693c7a963ab4b489a5c89343520e819360be3281722e9ac5a240d7"
        fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
        }).then(response=>{
            return response.json();
        }).then(data=>{
            console.log("res:",data)
        }).catch(error=>{ 
            return error.response;
        });
    }

        
    const createCard = async() => {
        const url = "https://api.trello.com/1/cards?idList=5abbe4b7ddc1b351ef961414&?key=90fc659f1f41eda945c3716c07cd5ad4&token=5cdf908ba0693c7a963ab4b489a5c89343520e819360be3281722e9ac5a240d7"
        fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        }
        }).then(response=>{
            return response.json();
        }).then(data=>{
            console.log("res:",data)
        }).catch(error=>{ 
            return error.response;
        });
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Trello API</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('trello')) {
    ReactDOM.render(<Example />, document.getElementById('trello'));
}
