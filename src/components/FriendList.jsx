import PropTypes from "prop-types";
import FriendContext from "../context/FriendContext.tsx";
import {useContext} from "react";

function FriendList() {

    const {friends} = useContext(FriendContext);

    return (
        <div className="FriendList">
            <h2>{friends.length < 2 ? "Your friend" : "Your friends"}</h2>
            {friends.length
                ? friends.map((username) => <p key={username}>{username}</p>)
                : "Add your first friend below"}
            <hr/>
        </div>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};

export default FriendList;
