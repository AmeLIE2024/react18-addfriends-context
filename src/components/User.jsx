import PropTypes from "prop-types";
import FriendContext from "../context/FriendContext.tsx";
import {useContext} from "react";

function User(props) {
    const {username, name, email} = props;

    const {friends, setFriends} = useContext(FriendContext);

    function addFriend() {
        if (friends.includes(username)) {
            setFriends(friends.filter((user) => user !== username));
        } else {
            setFriends([username, ...friends]);
        }
    }

    return (
        <div className="User">
            <h3>{username}</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <button onClick={addFriend}>
                {friends.includes(username) ? "Unfollow" : "Follow"}
            </button>
            <hr/>
        </div>
    );
}

User.propTypes = {
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    friends: PropTypes.array.isRequired,
    setFriends: PropTypes.func.isRequired,
};

export default User;
