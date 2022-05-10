import React from 'react'

export const Form = ({onSearch, changeTerm}) => {
  return (
    <div>
    <form onSubmit={onSearch}>
        <div>
            <input
                id="publisher"
                type="text"
               onChange={changeTerm}
               placeholder="Write term"
            />
        </div>
 
        <button type="submit" name="action">Search</button>
    </form>
</div>
  )
}
