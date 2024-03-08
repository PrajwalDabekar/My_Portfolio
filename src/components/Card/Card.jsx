import React from "react";

function Card({title='Project-Title',stack='stack',cover='https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60',hyperlink=''}){

    return(
        <a 
        href={hyperlink}
        class="w-[200px] sm:w-[270px] h-full bg-white rounded-md text-wrap">
  <img
    src={cover}
    alt="Laptop"
    class="h-[120px] w-full rounded-t-md object-cover"
  />
  <div class="p-4 text-wrap">
    <h1 class="inline-flex items-center text-lg font-semibold">
       {title} {" "}
    </h1>
    <p class="mt-3 text-sm text-gray-600">
      {stack}
    </p>
    
  </div>
</a>

    )
}

export default Card