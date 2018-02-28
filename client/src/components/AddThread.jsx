import React from 'react';

class AddThread extends React.Component{
  constructor(props){
    super(props);
    this.state = {
     comment:'',
     userName:''
   }
   this.add = this.add.bind(this);
   this.updateComment = this.updateComment.bind(this);
   this.updateUserName = this.updateUserName.bind(this);

  }
  updateComment(e){
    this.setState({
      comment:e.target.value
    })
  }
  updateUserName(e){
    this.setState({
      userName:e.target.value
    })
  }
  add(){
    this.props.addThread(this.state.comment, this.state.UserName)
    this.setState({
      comment:'',
      userName:''
    })
  }
  render(){
    return (<div>

        <textarea onChange={this.updateComment} value={this.state.comment}>

           
        </textarea>
        <div>
        userName:<input></input>
      <button onClick={this.add}>Add Thread </button>
        </div>
        </div>

    )
  }

}
export default AddThread;
