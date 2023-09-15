'use client';
import {
    Input,
    Stack,
    FormLabel,
    FormControl,
    Checkbox,
    Text,
    Button,
    Link,
    Box,
    HStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {ChakraProvider} from "@chakra-ui/react";
import {CacheProvider} from "@chakra-ui/next-js";
import Icon from '@/components/Icon'

export default function Signup() {
    return(
    <main className="min-h-screen bg-nord4 text-nord-0 flex flex-col overflow-hidden items-center justify-center place-content-center px-[10%] lg:px-[15%] xl:px-[33%]">
    <ChakraProvider>
    <CacheProvider>
        <div className={"w-3/4 h-full p-6 rounded-3xl bg-nord-6 flex flex-col items-center"}>
          <Stack spacing={4}>
             <Icon/>
              <h1 className={"text-3xl font-bold text-center"}>Welcome to FlexiFit!</h1>
                          <HStack className={'w-full justify-between'}>
              <Box className={'w-9/12'}>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box className={'w-9/12'}>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link as={NextLink} href={'/login'}>
                    <Text color={'blue.400'}>Already have an account?</Text>
                </Link>
              </Stack>
                <Link as={NextLink} href={'/dashboard'} className={'w-full flex'}>
                <Button
                className={'bg-blue-500 hover:bg-blue-600 text-white w-1/2 mx-auto'}>
                    Sign up
                </Button>
                </Link>
            </Stack>
          </Stack>
        </div>
    </CacheProvider>
    </ChakraProvider>
    </main>
    )
}