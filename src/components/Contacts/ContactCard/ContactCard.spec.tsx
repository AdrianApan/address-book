import dayjs from 'dayjs'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { EMPTY_PLACEHOLDER } from 'src/utils/consts'
import ContactCard from './ContactCard'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
})

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('<ContactCard />', () => {
  const mockData = {
    id: '145',
    name: 'John Doe',
    email: 'john.doe@foobar.com',
    avatar: 'https://i.pravatar.cc/300',
    birthday: '2022-06-30T19:16:41.824Z',
    phone: '',
    createdAt: 'Thu, 20 Apr 2023 18:30:45 GMT',
  }

  beforeEach(() => {
    render(
      <Wrapper>
        <ContactCard details={mockData} />
      </Wrapper>,
    )
  })

  it('Should display an avatar component', () => {
    const avatar = screen.getByAltText(mockData.name)
    expect(avatar).toBeInTheDocument()
  })

  it('Should display an avatar with the correct src image', () => {
    const avatar = screen.getByAltText(mockData.name)
    expect(avatar).toHaveAttribute('src', mockData.avatar)
  })

  it('Should display the name field', async () => {
    const name = await screen.findByText(mockData.name)
    expect(name).toBeInTheDocument()
  })

  it('Should display the formatted timestamp field including the ID', async () => {
    const timestamp = await screen.findByText(
      `#${mockData.id} - Added on ${dayjs(mockData.createdAt).format('DD MMM YYYY, HH:mm:ss')}`,
    )
    expect(timestamp).toBeInTheDocument()
  })

  it('Should display an Edit and a Delete CTA', async () => {
    const editButton = screen.getAllByRole('button', { name: 'edit' })[0]
    const deleteButton = screen.getAllByRole('button', { name: 'delete' })[0]
    expect(editButton).toBeInTheDocument()
    expect(deleteButton).toBeInTheDocument()
  })

  it('Should expand the collapsible content and display the extra fields', async () => {
    const collapseCTA = screen.getByTestId('collapse')
    // Should be collapsed by default
    expect(collapseCTA).toHaveAttribute('aria-expanded', 'false')
    // Expand
    fireEvent.click(collapseCTA)
    expect(collapseCTA).toHaveAttribute('aria-expanded', 'true')
    // Check for extra details
    const email = await screen.findByText(mockData.email)
    const phone = await screen.findByText(EMPTY_PLACEHOLDER)
    const birthday = await screen.findByText(dayjs(mockData.birthday).format('DD MMM YYYY'))
    expect(email).toBeInTheDocument()
    expect(phone).toBeInTheDocument()
    expect(birthday).toBeInTheDocument()
  })
})
