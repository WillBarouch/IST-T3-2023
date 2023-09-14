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
} from "@chakra-ui/react";
import NextLink from "next/link";
import {ChakraProvider} from "@chakra-ui/react";
import {CacheProvider} from "@chakra-ui/next-js";
import Icon from '@/components/Icon'

export default function Login() {
    return(
    <main className="min-h-screen bg-nord4 text-nord-0 flex flex-col overflow-hidden items-center justify-center place-content-center px-[33%]">
    <ChakraProvider>
    <CacheProvider>
        <div className={"w-3/4 h-full p-6 rounded-3xl bg-nord-6 flex flex-col items-center"}>
            <Icon/>
          <Stack spacing={4}>
              <h1 className={"text-3xl font-bold text-center"}>Welcome back to FlexiFit!</h1>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link as={NextLink} href={'/signup'}>
                    <Text color={'blue.400'}>Don&apos;t have an account?</Text>
                </Link>
              </Stack>
                <Link as={NextLink} href={'/dashboard'} className={'w-full justify-center flex'}>
                <Button
                className={'bg-blue-500 hover:bg-blue-600 text-white w-1/2 mx-auto justify-center self-center'}>
                    Sign in
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