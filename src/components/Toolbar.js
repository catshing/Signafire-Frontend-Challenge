import React from 'react';

const Toolbar = (props) => (
    <div>
        <h2 id="toolbar__starred">
            Starred: {
                props.showTrashed ? (props.trashedMessages.filter(msg => msg.meta.isStarred === true).length
            ) : (
                props.messages.filter(msg => msg.meta.isStarred === true).length
                )
            }
        </h2>
        <div className="toolbar__toggleTrashedMessages">
        <button
            type="button"
            className="toolbar__trashButton"
            onClick={props.toggleTrashedMessages}>
                <span>
                {
                    props.showTrashed ? 'Show Untrashed Messages' : 'Show Trashed Messages'
                }
                </span>
        </button>
            <form className="toolbar__form" onSubmit={props.onChangeSubmit}>
                <label className="toolbar__label">
                    <input type="text" value={props.value} onChange={e => props.onChangeSearch(e)} />
                </label>
                    <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
);

export default Toolbar;