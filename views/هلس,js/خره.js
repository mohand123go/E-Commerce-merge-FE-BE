/* <% for(let i = 0 ; i < items.length ; i++){ %>

            <%   if( items[i].userEmail == searchResult   ) {%>

            <tr>
                <th scope="row"><%= i+1 %></th>
                <td><%= items[i].userEmail %></td>

                <td><%= items[i].amount  %></td>

                <td><%= items[i].address%></td>



                <form method="POST">


                    <% if(items[i].status == 'completed' || items[i].status == 'sent' ){ %>
                    <td> <%= items[i].status %></td>
                    <% }else{ %>
                    <td>
                        <select name="editedStatus" class="form-control">

                            <option value="pending"> pending </option>
                            <option value="sent"> sent </option>
                            <option value="completed"> completed </option>
                        </select>
                    </td>
                    <%  } %>

                    <td>

                        <input type="hidden" name='cartId' value="<%= items[i]._id %>">
                        <% if(items[i].status == 'completed' || items[i].status == 'sent' ){ %>

                        <% }else{ %>

                        <input type="hidden" name="redirectTo" value="/admin/orders">
                        <input type="hidden" name='userId' value="<%= items[i].userId %>">
                        <input type="submit" class="btn btn-success" value="Cancel" formaction="/orders/cancel">

                        <input type="submit" class="btn btn-success" value="Save" formaction="/admin/orders/save">
                        <%  } %>


                    </td>
                </form>
            </tr>
            <% }else if(searchResult == undefined ) { %>
            <tr>
                <th scope="row"><%= i+1 %></th>
                <td><%= items[i].userEmail %></td>
                <td><%= items[i].name %></td>
                <td><%= items[i].price%></td>
                <td><%= items[i].amount  %></td>
                <td><%= items[i].amount * items[i].price %></td>
                <td><%= items[i].address%></td>



                <form method="POST">


                    <% if(items[i].status == 'completed' || items[i].status == 'sent' ){ %>
                    <td> <%= items[i].status %></td>
                    <% }else{ %>
                    <td>
                        <select name="editedStatus" class="form-control">

                            <option value="pending"> pending </option>
                            <option value="sent"> sent </option>
                            <option value="completed"> completed </option>
                        </select>
                    </td>
                    <%  } %>

                    <td>

                        <input type="hidden" name='cartId' value="<%= items[i]._id %>">
                        <% if(items[i].status == 'completed' || items[i].status == 'sent' ){ %>

                        <% }else{ %>

                        <input type="hidden" name="redirectTo" value="/admin/orders">
                        <input type="hidden" name='userId' value="<%= items[i].userId %>">
                        <input type="submit" class="btn btn-success" value="Cancel" formaction="/orders/cancel">

                        <input type="submit" class="btn btn-success" value="Save" formaction="/admin/orders/save">
                        <%  } %>


                    </td>
                </form>
            </tr>





            <% }%>
            <% } %>

            <% } %>
        </tbody>
    </table>
    <form class="text-right" method="POST">
        <input type="hidden" name="redirectTo" value="/admin/orders">
        <input type="submit" value="Cancel All" class="btn btn-danger" formaction="/orders/cancelAll">

    </form>
 */

 /* manger order
 
 
 
 
<div class="container py-5">
    <form method="POST">





        <input type="search" placeholder="search for User Email" name="search" class="form-control">
        <% if(validationErrors){%>
        <p class="alert alert-danger"><%= validationErrors.msg %></p>
        <% } %>
        <input type="submit" class="btn btn-danger" value="search" formaction="/admin/orders/search">

    </form>


    <form action="/admin/orders" method="GET">
        <select name="statusfilter" class="form-control">
            <option value="all"> all </option>
            <option value="pending"> pending </option>
            <option value="sent"> sent </option>
            <option value="completed"> completed </option>
        </select>
        <input type="submit" value="Filter" class="btn btn-primary" />
    </form>


    <% if(orders.length == 0){%>
    <p class="alert alert-danger">there no Order yet</p>
    <% } else { %>


        
          <nav class="HomeProductItem--nav">
        <ul>
          <li class="nav_icon"> <a href="/cart"><i class="fas fa-bars"></i></a></li>







        </ul>
      </nav>
    



*/