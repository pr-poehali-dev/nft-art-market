import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface NFTArtwork {
  id: number;
  title: string;
  artist: string;
  price: string;
  image: string;
  category: string;
}

const nftArtworks: NFTArtwork[] = [
  {
    id: 1,
    title: "Ethereal Waves",
    artist: "CryptoArtist",
    price: "2.5 ETH",
    image: "https://cdn.poehali.dev/projects/be544baf-dc72-4940-8c05-0b5ab20b70b8/files/7d32bf7e-4d52-44e5-8713-229a36485a50.jpg",
    category: "abstract"
  },
  {
    id: 2,
    title: "Neon Dreams",
    artist: "PixelMaster",
    price: "3.8 ETH",
    image: "https://cdn.poehali.dev/projects/be544baf-dc72-4940-8c05-0b5ab20b70b8/files/1e2c39e9-60c9-4e52-b5c7-edab3185aa0b.jpg",
    category: "cyberpunk"
  },
  {
    id: 3,
    title: "Golden Liquid",
    artist: "DigitalVision",
    price: "4.2 ETH",
    image: "https://cdn.poehali.dev/projects/be544baf-dc72-4940-8c05-0b5ab20b70b8/files/305b68a8-f8ad-41a1-a118-b2fa4068882a.jpg",
    category: "abstract"
  },
  {
    id: 4,
    title: "Cosmic Flow",
    artist: "ArtGenerator",
    price: "1.9 ETH",
    image: "https://cdn.poehali.dev/projects/be544baf-dc72-4940-8c05-0b5ab20b70b8/files/7d32bf7e-4d52-44e5-8713-229a36485a50.jpg",
    category: "space"
  },
  {
    id: 5,
    title: "Digital Pulse",
    artist: "NFTCreator",
    price: "2.1 ETH",
    image: "https://cdn.poehali.dev/projects/be544baf-dc72-4940-8c05-0b5ab20b70b8/files/1e2c39e9-60c9-4e52-b5c7-edab3185aa0b.jpg",
    category: "cyberpunk"
  },
  {
    id: 6,
    title: "Abstract Fusion",
    artist: "MetaArtist",
    price: "5.0 ETH",
    image: "https://cdn.poehali.dev/projects/be544baf-dc72-4940-8c05-0b5ab20b70b8/files/305b68a8-f8ad-41a1-a118-b2fa4068882a.jpg",
    category: "abstract"
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" className="text-primary" size={28} />
              <h1 className="text-2xl font-bold tracking-tight">NFT Gallery</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setActiveTab('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeTab === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveTab('marketplace')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeTab === 'marketplace' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Торговая площадка
              </button>
              <Button variant="outline" size="sm">
                <Icon name="Wallet" size={16} className="mr-2" />
                Connect Wallet
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {activeTab === 'home' && (
          <section className="container mx-auto px-6 py-24 animate-fade-in">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                Новая коллекция
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Откройте мир
                <span className="block text-primary">цифрового искусства</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Уникальные NFT произведения от талантливых художников со всего мира
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" onClick={() => setActiveTab('marketplace')}>
                  Смотреть коллекцию
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  Узнать больше
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {nftArtworks.slice(0, 3).map((artwork, index) => (
                <Card 
                  key={artwork.id} 
                  className="group overflow-hidden border-border bg-card hover:border-primary transition-all duration-300 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{artwork.artist}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{artwork.price}</span>
                      <Button size="sm" variant="ghost">
                        <Icon name="Heart" size={18} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'marketplace' && (
          <section className="container mx-auto px-6 py-16 animate-fade-in">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Торговая площадка</h2>
              <p className="text-muted-foreground text-lg">
                Исследуйте и приобретайте уникальные NFT произведения
              </p>
            </div>

            <Tabs defaultValue="all" className="mb-8">
              <TabsList>
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="abstract">Абстракция</TabsTrigger>
                <TabsTrigger value="cyberpunk">Киберпанк</TabsTrigger>
                <TabsTrigger value="space">Космос</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nftArtworks.map((artwork, index) => (
                    <Card 
                      key={artwork.id}
                      className="group overflow-hidden border-border bg-card hover:border-primary transition-all duration-300 cursor-pointer animate-scale-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="aspect-square overflow-hidden relative">
                        <img 
                          src={artwork.image} 
                          alt={artwork.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <Button size="icon" variant="secondary" className="rounded-full">
                            <Icon name="Heart" size={18} />
                          </Button>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-semibold mb-1">{artwork.title}</h3>
                            <p className="text-sm text-muted-foreground">{artwork.artist}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div>
                            <p className="text-xs text-muted-foreground">Цена</p>
                            <span className="text-lg font-bold text-primary">{artwork.price}</span>
                          </div>
                          <Button size="sm">
                            Купить
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="abstract" className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nftArtworks.filter(art => art.category === 'abstract').map((artwork) => (
                    <Card 
                      key={artwork.id}
                      className="group overflow-hidden border-border bg-card hover:border-primary transition-all duration-300 cursor-pointer"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={artwork.image} 
                          alt={artwork.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-1">{artwork.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{artwork.artist}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-primary">{artwork.price}</span>
                          <Button size="sm">Купить</Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="cyberpunk" className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nftArtworks.filter(art => art.category === 'cyberpunk').map((artwork) => (
                    <Card 
                      key={artwork.id}
                      className="group overflow-hidden border-border bg-card hover:border-primary transition-all duration-300 cursor-pointer"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={artwork.image} 
                          alt={artwork.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-1">{artwork.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{artwork.artist}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-primary">{artwork.price}</span>
                          <Button size="sm">Купить</Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="space" className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nftArtworks.filter(art => art.category === 'space').map((artwork) => (
                    <Card 
                      key={artwork.id}
                      className="group overflow-hidden border-border bg-card hover:border-primary transition-all duration-300 cursor-pointer"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={artwork.image} 
                          alt={artwork.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-1">{artwork.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{artwork.artist}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-primary">{artwork.price}</span>
                          <Button size="sm">Купить</Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>
        )}
      </main>

      <footer className="border-t border-border mt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Sparkles" className="text-primary" size={24} />
                <h3 className="text-lg font-bold">NFT Gallery</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для покупки и продажи уникальных цифровых произведений искусства
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Маркетплейс</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Все NFT</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новые</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Популярные</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-3">
                <Button size="icon" variant="ghost">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button size="icon" variant="ghost">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button size="icon" variant="ghost">
                  <Icon name="Github" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 NFT Gallery. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
