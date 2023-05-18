/* eslint-disable react-hooks/rules-of-hooks */
"use client";

/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Table,
  Th,
  Thead,
  Tr,
  Tbody,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import Preview from "../PreviewTable";

const Form1 = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box>
      <Heading w="100%" textAlign={"start"} fontWeight="normal" mb="2%">
        Olá Fulano, seja bem vindo(a)!
      </Heading>
      <Flex>
        <Box>
          Esse é seu primeiro acesso, por isso vamos precisar configurar os
          arquivos de itegração.
          <br />
          Clique em "Próximo" para continuar.
        </Box>
      </Flex>
    </Box>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"start"} fontWeight="normal" mb="2%">
        Abaixo selecione o empreendimento
      </Heading>
      <Box>
        <Select>
          <option value="option1">Empreendimento 1</option>
          <option value="option2">Empreendimento 2</option>
          <option value="option3">Empreendimento 3</option>
        </Select>
      </Box>
    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"start"} fontWeight="normal">
        Empreendimento 1 - Configuração
      </Heading>
      <SimpleGrid columns={1} spacing={6} mt={5}>
        <Box>
          A configuração do empreendimento 1 será realizada em 3 etapas.
          <br />
          <br />
          <b>1ª Etapa:</b> Configuração do arquivo de estoque.
          <FormLabel mt={4}>Arquivo de estoque</FormLabel>
          <Input
            type="file"
            id="file"
            name="file"
            accept=".csv"
            placeholder="Arquivo de estoque"
          />
        </Box>
      </SimpleGrid>
    </>
  );
};

const Form4 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"start"} fontWeight="normal">
        Empreendimento 1 - Confirme a ordem das colunas.
      </Heading>
      <SimpleGrid columns={1} spacing={6} mt={5}>
        <GridItem>
          <Box>
            <FormLabel mt={4}>Data de vencimento</FormLabel>
            <Table>
              <Thead>
                <Tr>
                  <Th>Linha</Th>
                  <Th>Coluna</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Th>
                    <Input type="text" />
                  </Th>
                  <Th>
                    <Input type="text" />
                  </Th>
                </Tr>
              </Tbody>
            </Table>
          </Box>
          <Box>
            <FormLabel mt={4}>Valor</FormLabel>
            <Table>
              <Thead>
                <Tr>
                  <Th>Linha</Th>
                  <Th>Coluna</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Th>
                    <Input type="text" />
                  </Th>
                  <Th>
                    <Input type="text" />
                  </Th>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          <Box id="preview" mt={5}>
            <FormLabel mt={4}>Preview</FormLabel>
            <Preview />
          </Box>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(23.23);
  return (
    <>
      <Box
        backgroundColor="#fff"
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <Form1 />
        ) : step === 2 ? (
          <Form2 />
        ) : step === 3 ? (
          <Form3 />
        ) : (
          <Form4 />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Voltar
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 4}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 4) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Próximo
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                Salvar
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
