const handlelogOut = () => {
    console.log(66);
    const token = localStorage.getItem("token");

    fetch("https://post-2-drf.onrender.com/user/logout/", {
        method: "POST",
        headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");
        });
};