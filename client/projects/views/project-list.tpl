<form>
    <label>Name</label>
    <input ng-model="newProject.name">
    <label>Description</label>
    <input ng-model="newProject.description">
    <button ng-click="projects.save(newProject); newProject='';">Add</button>
</form>
<ul>
    <li ng-repeat="project in projects">
        <button ng-click="remove(project)">X</button>
        <a href="/projects/{{project._id}}">{{project.name}}</a>
        <p>{{project.description}}</p>

    </li>
</ul>