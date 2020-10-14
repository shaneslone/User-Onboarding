import React from 'react'

export default function Form(props) {
    const { values } = props;
    return (
        <div><form>
            <label>
                Name:
                <input
                    name="name"
                    type="text"
                    value={values.name}
                    // onChange={}
                />
            </label>
            <label>
                Email:
                <input
                    name="email"
                    type="email"
                    value={values.email}
                    // onChange={}
                />
            </label>
            <label>
                Password:
                <input
                    name="password"
                    type="text"
                    value={values.password}
                //     onChange={}
                />
            </label>
            <label>
                Terms of Service:
                <input
                    name="tos"
                    type="checkbox"
                    checked={values.tos}
                    // onChange={}
                />
            </label>
            <button>Submit</button>
        </form>
            
        </div>
    )
}
