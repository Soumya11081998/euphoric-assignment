import React from 'react';
import Friend from './Friend';
import './FriendList.css';

const FriendList = () => {
    return (
        <div className="friendList">
            <input className="searchBar" placeholder="Search" />
            <hr />
            <div className="personList">
                <Friend
                    image = "https://scontent.fccu13-1.fna.fbcdn.net/v/t1.6435-9/127228009_1042019186298063_1853758436202537784_n.jpg?_nc_cat=111&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=l74gPjw5hWcAX-K8bZK&tn=LMRixBQS5xVtfy4F&_nc_ht=scontent.fccu13-1.fna&oh=302db75a6e22dd61c0ce04f139f25877&oe=613A90D0"
                    Name="Friend 1"
                    Chat="Hello Every one"
                    Time = "time"
                />
                <hr />
                <Friend
                    image = "https://scontent.fccu13-1.fna.fbcdn.net/v/t1.6435-9/127228009_1042019186298063_1853758436202537784_n.jpg?_nc_cat=111&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=l74gPjw5hWcAX-K8bZK&tn=LMRixBQS5xVtfy4F&_nc_ht=scontent.fccu13-1.fna&oh=302db75a6e22dd61c0ce04f139f25877&oe=613A90D0"
                    Name="Friend 2"
                    Chat="Hello Every one"
                    Time = "time"
                />
                <hr />
                <Friend
                    image = "https://scontent.fccu13-1.fna.fbcdn.net/v/t1.6435-9/127228009_1042019186298063_1853758436202537784_n.jpg?_nc_cat=111&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=l74gPjw5hWcAX-K8bZK&tn=LMRixBQS5xVtfy4F&_nc_ht=scontent.fccu13-1.fna&oh=302db75a6e22dd61c0ce04f139f25877&oe=613A90D0"
                    Name="Friend 3"
                    Chat="Hello Every one"
                    Time = "time"
                />
                <hr />
                <Friend
                    image = "https://scontent.fccu13-1.fna.fbcdn.net/v/t1.6435-9/127228009_1042019186298063_1853758436202537784_n.jpg?_nc_cat=111&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=l74gPjw5hWcAX-K8bZK&tn=LMRixBQS5xVtfy4F&_nc_ht=scontent.fccu13-1.fna&oh=302db75a6e22dd61c0ce04f139f25877&oe=613A90D0"
                    Name="Friend 4"
                    Chat="Hello Every one"
                    Time = "time"
                />
                <hr />
            </div>
        </div>
    )
}

export default FriendList
