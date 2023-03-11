const { useEffect, useState } = require("react")

export const useAuth = () => {
    const [user, setUser] = useState()
    useEffect(() => {
        fetch(`http://localhost:5055/api/user`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('glampcity-token')}`,
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                setUser(data);
            })
    }, [])

    return user;
}