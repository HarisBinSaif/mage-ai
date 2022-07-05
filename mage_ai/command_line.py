from mage_ai.data_preparation.models.pipeline import Pipeline
from mage_ai.data_preparation.repo_manager import init_repo
from mage_ai.server.server import main as start_server

import asyncio
import os


def main():
    import sys
    command = sys.argv[1]

    if command == 'init':
        repo_path = os.path.join(os.getcwd(), sys.argv[2])
        init_repo(repo_path)
    elif command == 'start':
        print('Starting server...')
        if len(sys.argv) > 2:
            repo_path = os.path.join(os.getcwd(), sys.argv[2])
        else:
            repo_path = os.getcwd()
        asyncio.run(start_server(repo_path))
    elif command == 'run':
        pipeline_uuid = sys.argv[2]
        pipeline = Pipeline(pipeline_uuid, os.getcwd())
        
        asyncio.run(pipeline.execute(analyze_outputs=False))


if __name__ == "__main__":
    main()