# Add an existing DBT project to Mage

If you have an existing DBT project, you can add it to your Mage project.

For example, if your Mage project is named `demo_project`
and your existing DBT project is named `demo`, add your DBT project in the Mage project under
the following path:

```
demo_project/dbt/demo/
```

You can have multiple DBT projects in a single Mage project under the folder named `dbt/` at the
root location of your Mage project.

For example:

```
demo_project/
|   dbt/
|   |   demo/
|   |   |   ...
|   |   project_2/
|   |   |   ...
```

<br />

## Required structure

### Connection profiles

For Mage to properly run DBT commands, you must have a `profiles.yml` file at the root
of each of your DBT projects. For example:

```
demo_project/
|   dbt/
|   |   demo/
|   |   |   profiles.yml
|   |   project_2/
|   |   |   profiles.yml
```

For more information on how to configure DBT connection profiles,
read this [documentation](connection_profiles.md).

<br />
