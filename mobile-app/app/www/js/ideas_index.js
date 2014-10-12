<script type="text/template" id='idea-index'>
<table>
<thead>
	<tr>
		<th>Title</th>
		<th>Description</th>
	</tr>
</thead>
<tbody>
<% _.each(ideas, function(idea){ %>
	<tr>
		<td><%= idea.get('title') %></td>
		<td><%= idea.get('description') %></td>	
<% }) %>
</tbody>
</table>
</script>