import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';

export function AuthenticationTitle() {
    return (
        <Container size={420} my={40}>
            <Title
                align="center"
            >
                Welcome to Face Id Web Site!
            </Title>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Your Name" placeholder="Name" required />
                <TextInput label="Your Surname" placeholder="Surname" required />
                <TextInput label="Email" placeholder="Email" required />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                <Group position="apart" mt="lg">
                    <Checkbox label="Remember me" />
                    <Anchor component="button" size="sm">
                        Forgot password?
                    </Anchor>
                </Group>
                <button
                    type="button"
                    class="border border-green-500 bg-green-500 text-white mx-auto rounded-md px-[138px] py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                >
                    Sing in
                </button>

            </Paper>
        </Container>
    );
}