# FROM python:3.9.13-bullseye
FROM python:3.12.0a1-alpine
WORKDIR /code

COPY ./requirements.txt ./requirements.txt
COPY ./src ./src

ENV STARKNET_NETWORK=alpha-goerli
ENV STARKNET_WALLET=starkware.starknet.wallets.open_zeppelin.OpenZeppelinAccount

RUN apk add gmp-dev g++ gcc
RUN pip install -r requirements.txt

CMD ["python", "./src/start.py"]
