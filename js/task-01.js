{
    //console.log("Aw shucks, it works!");
    const listElemChildren = [...document.getElementById("categories").children];

    console.log("Number of categories: " + listElemChildren.length);

    listElemChildren.forEach((category) => {
        console.log("Category: " + category.getElementsByTagName("h2")[0].textContent);
        console.table("Elements: " + category.getElementsByTagName("li").length);
        //console.log("End of the line");
    });
    
}