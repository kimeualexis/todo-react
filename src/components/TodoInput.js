import React, {Component} from 'react';

class TodoInput extends Component {
    render() {
        return (
            <div className={"card card-body my-3"}>
                <form>
                    <div className={"input-group"}>
                        <div className={"input-group-prepend"}>
                            <div className={"input-group-text bg-primary text-white"}>
                                <i className={"fas fa-book"} />
                            </div>
                        </div>
                        <input type={"text"} className={"form-control text-capitalize"} placeholder={"add item"}/>
                    </div>

                    <button type={"submit"} className={"btn btn-block btn-primary my-3"}>add item</button>
                </form>
            </div>
        );
    }
}

export default TodoInput;