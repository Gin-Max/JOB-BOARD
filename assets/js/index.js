//Learn More
function myFunction(idAdv) {
    var moreText = document.getElementById("details_"+idAdv);
    var btnText = document.getElementById("detailsBtn_"+idAdv);
  
    
    if (moreText.style.display === "none") {
      btnText.innerHTML = "Learn less";
      moreText.style.display = "inline";
    } else {
      btnText.innerHTML = "Learn more";
      moreText.style.display = "none";
    }
  }

//Apply
$(".apply").click(function(event){
    let advId = $(this).data("adv-id");
    window.location=`http://localhost:3000/api/apply/${advId}`;
})


//fonctions Users
  $("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

$(".table tbody td a.deleteUser").click(function(){
    var id = $(this).attr("data-id")

    var request = {
        "url" : `http://localhost:3000/api/users/${id}`,
        "method" : "DELETE"
    }

    if(confirm("Do you really want to delete this record?")){
        $.ajax(request).done(function(response){
            alert("Data Deleted Successfully!");
            location.reload();
        })
    }

})

//fonctions Advertisements
$("#add_adv").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_adv").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/advertisements/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

$(".table tbody td a.deleteAdvertisement").click(function(){
    var id = $(this).attr("data-id")

    var request = {
        "url" : `http://localhost:3000/api/advertisements/${id}`,
        "method" : "DELETE"
    }

    if(confirm("Do you really want to delete this record?")){
        $.ajax(request).done(function(response){
            alert("Data Deleted Successfully!");
            location.reload();
        })
    }

})

//fonctions Apply
$("#add_apply").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_apply").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/apply/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

$(".table tbody td a.deleteApply").click(function(){
    var id = $(this).attr("data-id")

    var request = {
        "url" : `http://localhost:3000/api/apply/${id}`,
        "method" : "DELETE"
    }

    if(confirm("Do you really want to delete this record?")){
        $.ajax(request).done(function(response){
            alert("Data Deleted Successfully!");
            location.reload();
        })
    }

})


//fonctions Companies
$("#add_companie").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_companie").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/companies/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

$(".table tbody td a.deleteCompanies").click(function(){
    var id = $(this).attr("data-id")

    var request = {
        "url" : `http://localhost:3000/api/companies/${id}`,
        "method" : "DELETE"
    }

    if(confirm("Do you really want to delete this record?")){
        $.ajax(request).done(function(response){
            alert("Data Deleted Successfully!");
            location.reload();
        })
    }

})