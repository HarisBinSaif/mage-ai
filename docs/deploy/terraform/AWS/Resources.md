# Terraform AWS resources

Here is the default output of `terraform plan`:

```bash
data.archive_file.zip_the_python_code: Reading...
data.http.myip: Reading...
data.archive_file.zip_the_python_code: Read complete after 0s [id=df7d5d34f4675a43bee8f63de9eeaec10085f826]
data.http.myip: Read complete after 0s [id=http://ipv4.icanhazip.com]
data.aws_iam_policy_document.assume_role_policy: Reading...
data.aws_iam_policy_document.assume_role_policy: Read complete after 0s [id=320642683]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create
 <= read (data resources)

Terraform will perform the following actions:

  # data.aws_ecs_task_definition.main will be read during apply
  # (depends on a resource or a module with changes pending)
 <= data "aws_ecs_task_definition" "main" {
      + arn             = (known after apply)
      + family          = (known after apply)
      + id              = (known after apply)
      + network_mode    = (known after apply)
      + revision        = (known after apply)
      + status          = (known after apply)
      + task_definition = "mage-data-prep-task"
      + task_role_arn   = (known after apply)
    }

  # data.template_file.env_vars will be read during apply
  # (config refers to values not yet known)
 <= data "template_file" "env_vars" {
      + id       = (known after apply)
      + rendered = (known after apply)
      + template = jsonencode(
            [
              + {
                  + name  = "ENV"
                  + value = "production"
                },
              + {
                  + name  = "AWS_ACCESS_KEY_ID"
                  + value = "${aws_access_key_id}"
                },
              + {
                  + name  = "AWS_SECRET_ACCESS_KEY"
                  + value = "${aws_secret_access_key}"
                },
              + {
                  + name  = "LAMBDA_FUNCTION_ARN"
                  + value = "${lambda_func_arn}"
                },
              + {
                  + name  = "LAMBDA_FUNCTION_NAME"
                  + value = "${lambda_func_name}"
                },
            ]
        )
      + vars     = {
          + "aws_access_key_id"     = "AWS_ACCESS_KEY_ID"
          + "aws_secret_access_key" = "AWS_SECRET_ACCESS_KEY"
          + "lambda_func_arn"       = (known after apply)
          + "lambda_func_name"      = "mage-data-prep-events"
        }
    }

  # aws_alb.application_load_balancer will be created
  + resource "aws_alb" "application_load_balancer" {
      + arn                        = (known after apply)
      + arn_suffix                 = (known after apply)
      + desync_mitigation_mode     = "defensive"
      + dns_name                   = (known after apply)
      + drop_invalid_header_fields = false
      + enable_deletion_protection = false
      + enable_http2               = true
      + enable_waf_fail_open       = false
      + id                         = (known after apply)
      + idle_timeout               = 60
      + internal                   = false
      + ip_address_type            = (known after apply)
      + load_balancer_type         = "application"
      + name                       = "mage-data-prep-production-alb"
      + preserve_host_header       = false
      + security_groups            = (known after apply)
      + subnets                    = (known after apply)
      + tags                       = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-alb"
        }
      + tags_all                   = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-alb"
        }
      + vpc_id                     = (known after apply)
      + zone_id                    = (known after apply)

      + subnet_mapping {
          + allocation_id        = (known after apply)
          + ipv6_address         = (known after apply)
          + outpost_id           = (known after apply)
          + private_ipv4_address = (known after apply)
          + subnet_id            = (known after apply)
        }
    }

  # aws_cloudwatch_log_group.log-group will be created
  + resource "aws_cloudwatch_log_group" "log-group" {
      + arn               = (known after apply)
      + id                = (known after apply)
      + name              = "mage-data-prep-production-logs"
      + retention_in_days = 0
      + tags              = {
          + "Application" = "mage-data-prep"
          + "Environment" = "production"
        }
      + tags_all          = {
          + "Application" = "mage-data-prep"
          + "Environment" = "production"
        }
    }

  # aws_ecs_cluster.aws-ecs-cluster will be created
  + resource "aws_ecs_cluster" "aws-ecs-cluster" {
      + arn                = (known after apply)
      + capacity_providers = (known after apply)
      + id                 = (known after apply)
      + name               = "mage-data-prep-production-cluster"
      + tags               = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-ecs"
        }
      + tags_all           = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-ecs"
        }

      + default_capacity_provider_strategy {
          + base              = (known after apply)
          + capacity_provider = (known after apply)
          + weight            = (known after apply)
        }

      + setting {
          + name  = (known after apply)
          + value = (known after apply)
        }
    }

  # aws_ecs_service.aws-ecs-service will be created
  + resource "aws_ecs_service" "aws-ecs-service" {
      + cluster                            = (known after apply)
      + deployment_maximum_percent         = 200
      + deployment_minimum_healthy_percent = 100
      + desired_count                      = 1
      + enable_ecs_managed_tags            = false
      + enable_execute_command             = false
      + force_new_deployment               = true
      + iam_role                           = (known after apply)
      + id                                 = (known after apply)
      + launch_type                        = "FARGATE"
      + name                               = "mage-data-prep-production-ecs-service"
      + platform_version                   = (known after apply)
      + scheduling_strategy                = "REPLICA"
      + tags_all                           = (known after apply)
      + task_definition                    = (known after apply)
      + wait_for_steady_state              = false

      + load_balancer {
          + container_name   = "mage-data-prep-production-container"
          + container_port   = 6789
          + target_group_arn = (known after apply)
        }

      + network_configuration {
          + assign_public_ip = true
          + security_groups  = (known after apply)
          + subnets          = (known after apply)
        }
    }

  # aws_ecs_task_definition.aws-ecs-task will be created
  + resource "aws_ecs_task_definition" "aws-ecs-task" {
      + arn                      = (known after apply)
      + container_definitions    = (known after apply)
      + cpu                      = "512"
      + execution_role_arn       = (known after apply)
      + family                   = "mage-data-prep-task"
      + id                       = (known after apply)
      + memory                   = "1024"
      + network_mode             = "awsvpc"
      + requires_compatibilities = [
          + "FARGATE",
        ]
      + revision                 = (known after apply)
      + skip_destroy             = false
      + tags                     = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-ecs-td"
        }
      + tags_all                 = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-ecs-td"
        }
      + task_role_arn            = (known after apply)

      + volume {
          + name = "mage-data-prep-fs"

          + efs_volume_configuration {
              + file_system_id     = (known after apply)
              + root_directory     = "/"
              + transit_encryption = "ENABLED"
            }
        }
    }

  # aws_efs_file_system.file_system will be created
  + resource "aws_efs_file_system" "file_system" {
      + arn                     = (known after apply)
      + availability_zone_id    = (known after apply)
      + availability_zone_name  = (known after apply)
      + creation_token          = (known after apply)
      + dns_name                = (known after apply)
      + encrypted               = true
      + id                      = (known after apply)
      + kms_key_id              = (known after apply)
      + number_of_mount_targets = (known after apply)
      + owner_id                = (known after apply)
      + performance_mode        = "generalPurpose"
      + size_in_bytes           = (known after apply)
      + tags                    = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-efs"
        }
      + tags_all                = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-efs"
        }
      + throughput_mode         = "bursting"
    }

  # aws_efs_mount_target.mount_target[0] will be created
  + resource "aws_efs_mount_target" "mount_target" {
      + availability_zone_id   = (known after apply)
      + availability_zone_name = (known after apply)
      + dns_name               = (known after apply)
      + file_system_arn        = (known after apply)
      + file_system_id         = (known after apply)
      + id                     = (known after apply)
      + ip_address             = (known after apply)
      + mount_target_dns_name  = (known after apply)
      + network_interface_id   = (known after apply)
      + owner_id               = (known after apply)
      + security_groups        = (known after apply)
      + subnet_id              = (known after apply)
    }

  # aws_efs_mount_target.mount_target[1] will be created
  + resource "aws_efs_mount_target" "mount_target" {
      + availability_zone_id   = (known after apply)
      + availability_zone_name = (known after apply)
      + dns_name               = (known after apply)
      + file_system_arn        = (known after apply)
      + file_system_id         = (known after apply)
      + id                     = (known after apply)
      + ip_address             = (known after apply)
      + mount_target_dns_name  = (known after apply)
      + network_interface_id   = (known after apply)
      + owner_id               = (known after apply)
      + security_groups        = (known after apply)
      + subnet_id              = (known after apply)
    }

  # aws_iam_policy.iam_policy_for_lambda will be created
  + resource "aws_iam_policy" "iam_policy_for_lambda" {
      + arn         = (known after apply)
      + description = "IAM Policy for managing mage-data-prep lambda role"
      + id          = (known after apply)
      + name        = "mage-data-prep_policy_for_lambda_role"
      + path        = "/"
      + policy      = jsonencode(
            {
              + Statement = [
                  + {
                      + Action   = [
                          + "logs:CreateLogGroup",
                          + "logs:CreateLogStream",
                          + "logs:PutLogEvents",
                        ]
                      + Effect   = "Allow"
                      + Resource = "arn:aws:logs:*:*:*"
                    },
                ]
              + Version   = "2012-10-17"
            }
        )
      + policy_id   = (known after apply)
      + tags_all    = (known after apply)
    }

  # aws_iam_role.ecsTaskExecutionRole will be created
  + resource "aws_iam_role" "ecsTaskExecutionRole" {
      + arn                   = (known after apply)
      + assume_role_policy    = jsonencode(
            {
              + Statement = [
                  + {
                      + Action    = "sts:AssumeRole"
                      + Effect    = "Allow"
                      + Principal = {
                          + Service = "ecs-tasks.amazonaws.com"
                        }
                      + Sid       = ""
                    },
                ]
              + Version   = "2012-10-17"
            }
        )
      + create_date           = (known after apply)
      + force_detach_policies = false
      + id                    = (known after apply)
      + managed_policy_arns   = (known after apply)
      + max_session_duration  = 3600
      + name                  = "mage-data-prep-execution-task-role"
      + name_prefix           = (known after apply)
      + path                  = "/"
      + tags                  = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-iam-role"
        }
      + tags_all              = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-iam-role"
        }
      + unique_id             = (known after apply)

      + inline_policy {
          + name   = (known after apply)
          + policy = (known after apply)
        }
    }

  # aws_iam_role.lambda_role will be created
  + resource "aws_iam_role" "lambda_role" {
      + arn                   = (known after apply)
      + assume_role_policy    = jsonencode(
            {
              + Statement = [
                  + {
                      + Action    = "sts:AssumeRole"
                      + Effect    = "Allow"
                      + Principal = {
                          + Service = "lambda.amazonaws.com"
                        }
                      + Sid       = ""
                    },
                ]
              + Version   = "2012-10-17"
            }
        )
      + create_date           = (known after apply)
      + force_detach_policies = false
      + id                    = (known after apply)
      + managed_policy_arns   = (known after apply)
      + max_session_duration  = 3600
      + name                  = "mage-data-prep-lambda-role"
      + name_prefix           = (known after apply)
      + path                  = "/"
      + tags_all              = (known after apply)
      + unique_id             = (known after apply)

      + inline_policy {
          + name   = (known after apply)
          + policy = (known after apply)
        }
    }

  # aws_iam_role_policy_attachment.attach_iam_policy_to_lambda_role will be created
  + resource "aws_iam_role_policy_attachment" "attach_iam_policy_to_lambda_role" {
      + id         = (known after apply)
      + policy_arn = (known after apply)
      + role       = "mage-data-prep-lambda-role"
    }

  # aws_iam_role_policy_attachment.ecsTaskExecutionRole_policy will be created
  + resource "aws_iam_role_policy_attachment" "ecsTaskExecutionRole_policy" {
      + id         = (known after apply)
      + policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role"
      + role       = "mage-data-prep-execution-task-role"
    }

  # aws_internet_gateway.aws-igw will be created
  + resource "aws_internet_gateway" "aws-igw" {
      + arn      = (known after apply)
      + id       = (known after apply)
      + owner_id = (known after apply)
      + tags     = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-igw"
        }
      + tags_all = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-igw"
        }
      + vpc_id   = (known after apply)
    }

  # aws_lambda_function.terraform_lambda_func will be created
  + resource "aws_lambda_function" "terraform_lambda_func" {
      + architectures                  = (known after apply)
      + arn                            = (known after apply)
      + filename                       = "./python/event_handler.zip"
      + function_name                  = "mage-data-prep-events"
      + handler                        = "event_handler.lambda_handler"
      + id                             = (known after apply)
      + invoke_arn                     = (known after apply)
      + last_modified                  = (known after apply)
      + memory_size                    = 128
      + package_type                   = "Zip"
      + publish                        = false
      + qualified_arn                  = (known after apply)
      + qualified_invoke_arn           = (known after apply)
      + reserved_concurrent_executions = -1
      + role                           = (known after apply)
      + runtime                        = "python3.8"
      + signing_job_arn                = (known after apply)
      + signing_profile_version_arn    = (known after apply)
      + source_code_hash               = (known after apply)
      + source_code_size               = (known after apply)
      + tags_all                       = (known after apply)
      + timeout                        = 3
      + version                        = (known after apply)

      + environment {
          + variables = (known after apply)
        }

      + ephemeral_storage {
          + size = (known after apply)
        }

      + tracing_config {
          + mode = (known after apply)
        }
    }

  # aws_lb_listener.listener will be created
  + resource "aws_lb_listener" "listener" {
      + arn               = (known after apply)
      + id                = (known after apply)
      + load_balancer_arn = (known after apply)
      + port              = 80
      + protocol          = "HTTP"
      + ssl_policy        = (known after apply)
      + tags_all          = (known after apply)

      + default_action {
          + order            = (known after apply)
          + target_group_arn = (known after apply)
          + type             = "forward"
        }
    }

  # aws_lb_target_group.target_group will be created
  + resource "aws_lb_target_group" "target_group" {
      + arn                                = (known after apply)
      + arn_suffix                         = (known after apply)
      + connection_termination             = false
      + deregistration_delay               = "300"
      + id                                 = (known after apply)
      + ip_address_type                    = (known after apply)
      + lambda_multi_value_headers_enabled = false
      + load_balancing_algorithm_type      = (known after apply)
      + name                               = "mage-data-prep-production-tg"
      + port                               = 6789
      + preserve_client_ip                 = (known after apply)
      + protocol                           = "HTTP"
      + protocol_version                   = (known after apply)
      + proxy_protocol_v2                  = false
      + slow_start                         = 0
      + tags                               = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-lb-tg"
        }
      + tags_all                           = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-lb-tg"
        }
      + target_type                        = "ip"
      + vpc_id                             = (known after apply)

      + health_check {
          + enabled             = true
          + healthy_threshold   = 3
          + interval            = 30
          + matcher             = "200"
          + path                = "/api/kernels"
          + port                = "traffic-port"
          + protocol            = "HTTP"
          + timeout             = 5
          + unhealthy_threshold = 2
        }

      + stickiness {
          + cookie_duration = (known after apply)
          + cookie_name     = (known after apply)
          + enabled         = (known after apply)
          + type            = (known after apply)
        }
    }

  # aws_route.public will be created
  + resource "aws_route" "public" {
      + destination_cidr_block = "0.0.0.0/0"
      + gateway_id             = (known after apply)
      + id                     = (known after apply)
      + instance_id            = (known after apply)
      + instance_owner_id      = (known after apply)
      + network_interface_id   = (known after apply)
      + origin                 = (known after apply)
      + route_table_id         = (known after apply)
      + state                  = (known after apply)
    }

  # aws_route_table.public will be created
  + resource "aws_route_table" "public" {
      + arn              = (known after apply)
      + id               = (known after apply)
      + owner_id         = (known after apply)
      + propagating_vgws = (known after apply)
      + route            = (known after apply)
      + tags             = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-routing-table-public"
        }
      + tags_all         = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-routing-table-public"
        }
      + vpc_id           = (known after apply)
    }

  # aws_route_table_association.public[0] will be created
  + resource "aws_route_table_association" "public" {
      + id             = (known after apply)
      + route_table_id = (known after apply)
      + subnet_id      = (known after apply)
    }

  # aws_route_table_association.public[1] will be created
  + resource "aws_route_table_association" "public" {
      + id             = (known after apply)
      + route_table_id = (known after apply)
      + subnet_id      = (known after apply)
    }

  # aws_security_group.load_balancer_security_group will be created
  + resource "aws_security_group" "load_balancer_security_group" {
      + arn                    = (known after apply)
      + description            = "Managed by Terraform"
      + egress                 = [
          + {
              + cidr_blocks      = [
                  + "0.0.0.0/0",
                ]
              + description      = ""
              + from_port        = 0
              + ipv6_cidr_blocks = [
                  + "::/0",
                ]
              + prefix_list_ids  = []
              + protocol         = "-1"
              + security_groups  = []
              + self             = false
              + to_port          = 0
            },
        ]
      + id                     = (known after apply)
      + ingress                = [
          + {
              + cidr_blocks      = [
                  + "98.207.95.145/32",
                ]
              + description      = ""
              + from_port        = 443
              + ipv6_cidr_blocks = []
              + prefix_list_ids  = []
              + protocol         = "tcp"
              + security_groups  = []
              + self             = false
              + to_port          = 443
            },
          + {
              + cidr_blocks      = [
                  + "11.111.11.111/32",
                ]
              + description      = ""
              + from_port        = 80
              + ipv6_cidr_blocks = []
              + prefix_list_ids  = []
              + protocol         = "tcp"
              + security_groups  = []
              + self             = false
              + to_port          = 80
            },
        ]
      + name                   = (known after apply)
      + name_prefix            = (known after apply)
      + owner_id               = (known after apply)
      + revoke_rules_on_delete = false
      + tags                   = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-sg"
        }
      + tags_all               = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-sg"
        }
      + vpc_id                 = (known after apply)
    }

  # aws_security_group.mount_target_security_group will be created
  + resource "aws_security_group" "mount_target_security_group" {
      + arn                    = (known after apply)
      + description            = "Managed by Terraform"
      + egress                 = (known after apply)
      + id                     = (known after apply)
      + ingress                = [
          + {
              + cidr_blocks      = [
                  + "0.0.0.0/0",
                ]
              + description      = ""
              + from_port        = 2049
              + ipv6_cidr_blocks = [
                  + "::/0",
                ]
              + prefix_list_ids  = []
              + protocol         = "tcp"
              + security_groups  = []
              + self             = false
              + to_port          = 2049
            },
        ]
      + name                   = (known after apply)
      + name_prefix            = (known after apply)
      + owner_id               = (known after apply)
      + revoke_rules_on_delete = false
      + tags                   = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-efs-sg"
        }
      + tags_all               = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-efs-sg"
        }
      + vpc_id                 = (known after apply)
    }

  # aws_security_group.service_security_group will be created
  + resource "aws_security_group" "service_security_group" {
      + arn                    = (known after apply)
      + description            = "Managed by Terraform"
      + egress                 = [
          + {
              + cidr_blocks      = [
                  + "0.0.0.0/0",
                ]
              + description      = ""
              + from_port        = 0
              + ipv6_cidr_blocks = [
                  + "::/0",
                ]
              + prefix_list_ids  = []
              + protocol         = "-1"
              + security_groups  = []
              + self             = false
              + to_port          = 0
            },
        ]
      + id                     = (known after apply)
      + ingress                = [
          + {
              + cidr_blocks      = [
                  + "0.0.0.0/0",
                ]
              + description      = ""
              + from_port        = 6789
              + ipv6_cidr_blocks = []
              + prefix_list_ids  = []
              + protocol         = "tcp"
              + security_groups  = []
              + self             = false
              + to_port          = 6789
            },
        ]
      + name                   = (known after apply)
      + name_prefix            = (known after apply)
      + owner_id               = (known after apply)
      + revoke_rules_on_delete = false
      + tags                   = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-service-sg"
        }
      + tags_all               = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-service-sg"
        }
      + vpc_id                 = (known after apply)
    }

  # aws_subnet.private[0] will be created
  + resource "aws_subnet" "private" {
      + arn                                            = (known after apply)
      + assign_ipv6_address_on_creation                = false
      + availability_zone                              = "us-west-2a"
      + availability_zone_id                           = (known after apply)
      + cidr_block                                     = "10.32.0.0/24"
      + enable_dns64                                   = false
      + enable_resource_name_dns_a_record_on_launch    = false
      + enable_resource_name_dns_aaaa_record_on_launch = false
      + id                                             = (known after apply)
      + ipv6_cidr_block_association_id                 = (known after apply)
      + ipv6_native                                    = false
      + map_public_ip_on_launch                        = false
      + owner_id                                       = (known after apply)
      + private_dns_hostname_type_on_launch            = (known after apply)
      + tags                                           = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-private-subnet-1"
        }
      + tags_all                                       = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-private-subnet-1"
        }
      + vpc_id                                         = (known after apply)
    }

  # aws_subnet.private[1] will be created
  + resource "aws_subnet" "private" {
      + arn                                            = (known after apply)
      + assign_ipv6_address_on_creation                = false
      + availability_zone                              = "us-west-2b"
      + availability_zone_id                           = (known after apply)
      + cidr_block                                     = "10.32.1.0/24"
      + enable_dns64                                   = false
      + enable_resource_name_dns_a_record_on_launch    = false
      + enable_resource_name_dns_aaaa_record_on_launch = false
      + id                                             = (known after apply)
      + ipv6_cidr_block_association_id                 = (known after apply)
      + ipv6_native                                    = false
      + map_public_ip_on_launch                        = false
      + owner_id                                       = (known after apply)
      + private_dns_hostname_type_on_launch            = (known after apply)
      + tags                                           = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-private-subnet-2"
        }
      + tags_all                                       = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-private-subnet-2"
        }
      + vpc_id                                         = (known after apply)
    }

  # aws_subnet.public[0] will be created
  + resource "aws_subnet" "public" {
      + arn                                            = (known after apply)
      + assign_ipv6_address_on_creation                = false
      + availability_zone                              = "us-west-2a"
      + availability_zone_id                           = (known after apply)
      + cidr_block                                     = "10.32.100.0/24"
      + enable_dns64                                   = false
      + enable_resource_name_dns_a_record_on_launch    = false
      + enable_resource_name_dns_aaaa_record_on_launch = false
      + id                                             = (known after apply)
      + ipv6_cidr_block_association_id                 = (known after apply)
      + ipv6_native                                    = false
      + map_public_ip_on_launch                        = true
      + owner_id                                       = (known after apply)
      + private_dns_hostname_type_on_launch            = (known after apply)
      + tags                                           = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-public-subnet-1"
        }
      + tags_all                                       = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-public-subnet-1"
        }
      + vpc_id                                         = (known after apply)
    }

  # aws_subnet.public[1] will be created
  + resource "aws_subnet" "public" {
      + arn                                            = (known after apply)
      + assign_ipv6_address_on_creation                = false
      + availability_zone                              = "us-west-2b"
      + availability_zone_id                           = (known after apply)
      + cidr_block                                     = "10.32.101.0/24"
      + enable_dns64                                   = false
      + enable_resource_name_dns_a_record_on_launch    = false
      + enable_resource_name_dns_aaaa_record_on_launch = false
      + id                                             = (known after apply)
      + ipv6_cidr_block_association_id                 = (known after apply)
      + ipv6_native                                    = false
      + map_public_ip_on_launch                        = true
      + owner_id                                       = (known after apply)
      + private_dns_hostname_type_on_launch            = (known after apply)
      + tags                                           = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-public-subnet-2"
        }
      + tags_all                                       = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-public-subnet-2"
        }
      + vpc_id                                         = (known after apply)
    }

  # aws_vpc.aws-vpc will be created
  + resource "aws_vpc" "aws-vpc" {
      + arn                                  = (known after apply)
      + cidr_block                           = "10.32.0.0/16"
      + default_network_acl_id               = (known after apply)
      + default_route_table_id               = (known after apply)
      + default_security_group_id            = (known after apply)
      + dhcp_options_id                      = (known after apply)
      + enable_classiclink                   = (known after apply)
      + enable_classiclink_dns_support       = (known after apply)
      + enable_dns_hostnames                 = true
      + enable_dns_support                   = true
      + id                                   = (known after apply)
      + instance_tenancy                     = "default"
      + ipv6_association_id                  = (known after apply)
      + ipv6_cidr_block                      = (known after apply)
      + ipv6_cidr_block_network_border_group = (known after apply)
      + main_route_table_id                  = (known after apply)
      + owner_id                             = (known after apply)
      + tags                                 = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-vpc"
        }
      + tags_all                             = {
          + "Environment" = "production"
          + "Name"        = "mage-data-prep-vpc"
        }
    }

Plan: 29 to add, 0 to change, 0 to destroy.

─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

Note: You didn't use the -out option to save this plan, so Terraform can't guarantee to take exactly these actions if you run "terraform apply" now.
```
